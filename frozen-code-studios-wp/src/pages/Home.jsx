import {useState, useRef} from 'react';
import {useAuthContext} from './../providers/AuthProvider';
//import {doc, setDoc} from 'firebase/firestore';
//import {useFirebaseContext} from '../providers/FirebaseProvider';

export const Home = async () => {
  //const {myFS} = useFirebaseContext();

  const {profile} = useAuthContext();
  const [editMode, setEditMode] = useState(false);
  const textareaRef = useRef();

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleSaveClick = async () => {
    setEditMode(false);

    //  let DocRef = doc(myFS, 'web-data', 'home-video-text');
    //  let DocData = {
    //    text: videotext,
    //  };
    //  await setDoc(DocRef, DocData);
  };

  const handleTabPress = (e) => {
    e.preventDefault();

    const {selectionStart, selectionEnd} = textareaRef.current;
    const currentText = videotext.slice(0, selectionStart) + '   ' + videotext.slice(selectionEnd);

    setText(currentText);
  };

  //const docRef = doc(myFS, 'web-data', 'home-video-text');
  //const docSnap = await getDoc(docRef);

  //if (docSnap.exists()) {
  //  console.log('Document data:', docSnap.data());
  //} else {
  //  console.log('No such document!');
  //}
  const [videotext, setText] = useState('temp');

  return (
    <>
      <div className="main-content">
        <h1 className="h3">Studio Logo Here</h1>
        <div className="content-tt">
          <div className="video-container">
            <video width="100%" height="100%" controls="auto" style={{objectFit: 'cover'}}>
              <source src="/videos/frozen-code-studios.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {!editMode && <p className="wt">{videotext}</p>}
          {editMode && (
            <textarea
              className="wt"
              ref={textareaRef}
              value={videotext}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === 'Tab' && handleTabPress(e)}
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
      </div>
    </>
  );
};

export default Home;
