import React, {useState} from 'react';
import './VotingPoll.css';

const VotingPoll = () => {
  const [voteCounts, setVoteCounts] = useState([20, 34, 1, 12]);
  const [displayVotes, setDisplayVotes] = useState(true);

  const [optionTexts, setOptionTexts] = useState({
    a1: 'No choice as been provided.',
    a2: 'No choice as been provided.',
    a3: 'No choice as been provided.',
    a4: 'No choice as been provided.',
  });

  const [question, setQuestion] = useState('No question has been added sorry.');

  const handleButtonClick = (option) => {
    if (displayVotes) {
      const newVoteCounts = [...voteCounts];
      const index = parseInt(option.slice(1)) - 1;
      newVoteCounts[index]++;
      setVoteCounts(newVoteCounts);
      setDisplayVotes(false);
    }
  };

  const maxVotes = Math.max(...voteCounts);
  const minHeight = 100;
  const maxHeight = 355;

  return (
    <div className="Voting-Container">
      <div id="Voting-Box">
        <h1 className="Question">{question}</h1>
        <div className="Options">
          <div className="Buttons-Container">
            {Object.keys(optionTexts).map((option, index) => (
              <button
                key={index}
                className={`Column ${
                  option === 'a1' ? 'Column-left' : option === 'a4' ? 'Column-right' : ''
                }`}
                style={{
                  height: displayVotes
                    ? `${maxHeight}px`
                    : `${Math.min(
                        Math.max((voteCounts[index] / maxVotes) * maxHeight, minHeight),
                        maxHeight,
                      )}px`,
                }}
                onClick={() => handleButtonClick(option)}
                disabled={!displayVotes}
              >
                <p className="q">{optionTexts[option]}</p>
                {!displayVotes && (
                  <p className="text-below">{`Vote Count: ${voteCounts[index]}`}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPoll;
