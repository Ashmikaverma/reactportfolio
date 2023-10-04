import {useState} from 'react';
import './Paragraph.css';
const App = () => {
  const [buttonText, setbuttonText] = useState('Click Here');
  const [Text, setText] = useState('');

  function handleClick() {
    
    setbuttonText('');
    setText('Hello! I am a second year student of IIT ISM DHANBAD persuing Master of technology in Mathematics and Computing.I am a passionate individual with a strong interest in web development and an enthusiastic learner in the world of blockchain technology.Simultaneously, I have delved into the intricate world of blockchain, captivated by its potential to revolutionize industries and redefine how we conduct transactions and manage data securely.I am an active member of Cyberlabs in Blockchain division. ')
  }
 

  return (
    <div class="pstyle">
      <button  onClick={handleClick} ><div class='button'>{buttonText}</div></button>
      <p>{Text}</p>
    </div>
  );
};

export default App;
