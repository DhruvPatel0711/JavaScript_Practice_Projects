import React, { useState } from 'react';
import './App.css';
import Selection from './Selection';
import Textarea from './Textarea';
import { translateText } from "./api/Translate";  

function App() {
  const [inputText, setInputText] = useState("");
  const [fromLang, setFromLang] = useState('Language');  
  const [toLang, setToLang] = useState('Language');  
  const [color, setColor] = useState('#000000');
  const [translatedText, setTranslatedText] = useState("");

  const handleHover = () => {
    setColor('#ffffff');
  };

  const handleLeave = () => {
    setColor('#000000');
  };

  const handleTranslate = async () => {
    try {
      const result = await translateText(inputText, toLang, fromLang);
      setTranslatedText(result.translated_text); 
    } catch (error) {
      console.error("Failed to translate text:", error);
    }
  };

  const handletransfer = () =>{
    setFromLang(toLang);
    setToLang(fromLang);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='firstRow'>
          From:
          <Selection selectedValue={fromLang} onSelect={setFromLang} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="svg"
            viewBox="0 0 448 512"
            onClick={handletransfer}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <path
              fill={color}
              d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"
            />
          </svg>
          To:
          <Selection selectedValue={toLang} onSelect={setToLang} />
        </div>

        <div className='secondRow'>
          <Textarea inputText={inputText} setInputText={setInputText} />
          <Textarea inputText={translatedText} setInputText={() => {}} readOnly />
        </div>

        <div className='thirdRow'>
          <button onClick={handleTranslate}>Translate</button>
        </div>
      </div>
    </div>
  );
}

export default App;