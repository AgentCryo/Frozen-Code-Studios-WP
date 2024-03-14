import {useState, useRef, useEffect} from 'react';
import {useAuthContext} from './../providers/AuthProvider';
import {doc, getDoc, setDoc} from 'firebase/firestore';
import {useFirebaseContext} from '../providers/FirebaseProvider';
import VotingPoll from '../components/VotingPoll';

export const Home = () => {
  const {myFS} = useFirebaseContext();

  const {profile} = useAuthContext();
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef();
  const [videoDescription, setVideoDescription] = useState('Loading Text...');

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = async () => {
    setEditMode(false);

    let DocRef = doc(myFS, 'web-data', 'home');
    let DocData = {
      videoDescription: videoDescription,
    };
    await setDoc(DocRef, DocData);
  };

  const handleTabPress = (e) => {
    e.preventDefault();

    const {selectionStart, selectionEnd} = textareaRef.current;
    const currentText =
      videoDescription.slice(0, selectionStart) + '    ' + videoDescription.slice(selectionEnd);

    setVideoDescription(currentText);
  };

  const handleEnterPress = (e) => {};

  useEffect(() => {
    const getVideoText = async () => {
      const docRef = doc(myFS, 'web-data', 'home');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setVideoDescription(docSnap.data().videoDescription);
      }
    };

    getVideoText();
  }, [myFS]);
  console.log('data being sent to Firestore:', JSON.stringify(videoDescription));

  return (
    <>
      <div className="main-content">
        <h1 className="h3">Studio Logo Here</h1>
        <h1 className="ppp">Pixel Perfect Play, Every Day.</h1>
        <div className="content-tt">
          <div className="video-container">
            <video width="100%" height="100%" controls="auto" style={{objectFit: 'cover'}}>
              <source src="/videos/frozen-code-studios.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {!editMode && (
            <p
              className="wt"
              style={{
                whiteSpace: 'pre-wrap',
                lineHeight: '1.5',
                textIndent: '0.5em',
                marginLeft: '1em',
              }}
            >
              {
                videoDescription /*.split('   ').map((section, index) => (
    <span key={index} style={{ display: 'block', marginLeft: '-1em', marginRight: '1em' }}>{section}</span>
    ))*/
              }
            </p>
          )}
          {editMode && (
            <textarea
              className="wt"
              ref={textareaRef}
              value={videoDescription}
              onChange={(e) => setVideoDescription(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  handleTabPress(e);
                } else if (e.key === 'Enter') {
                  handleEnterPress(e);
                }
              }}
            />
          )}
        </div>

        {profile?.dev && (
          <div>
            {editMode && (
              <div>
                <div>
                  <button className="edit-button s" onClick={handleSaveClick}>
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {!editMode && profile?.dev && (
          <div>
            <button className="edit-button s" onClick={handleEditClick}>
              Edit
            </button>
          </div>
        )}

        <VotingPoll />
      </div>
    </>
  );
};
export default Home;
