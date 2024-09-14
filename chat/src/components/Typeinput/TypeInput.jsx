import React, { useState } from 'react';
import s from './TypeInput.module.css'
import images from '../../assets/index.js'

const TypeInput = ({messages, setMessages}) => {
  const [inputValue, setInputValue] = useState('');
  

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className={s.container}>
      <div className={s.messages}>
        {messages.map((message, index) => (
          <div key={index} className={s.message}>
            {message}
          </div>
        ))}
      </div>
      <div className={s.inputWrapper}>
        <input
          className={s.input}
          placeholder="Type your message here"
          value={inputValue}
          onChange={handleInput}
        />
        <button className={s.arrowButton} onClick={handleSendMessage}>
          <img className={s.arrowUp} src={images.arrowUp} alt="Arrow Up" />
        </button>
      </div>
    </div>
  );
};

export default TypeInput;
