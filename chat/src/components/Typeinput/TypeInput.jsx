import React, { useState } from 'react';
import s from './TypeInput.module.css'
import images from '../../assets/index.js'

const TypeInput = ({messages, setMessages}) => {
  const [inputValue, setInputValue] = useState('');
  

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
    
  };

  return (
    <div className={s.container}>
      <form className={s.inputWrapper} onSubmit={handleSendMessage}>
        
        <input
          className={s.input}
          placeholder="Type your message here"
          value={inputValue}
          onChange={handleInput}
          
        />
        <button className={s.arrowButton} type='submit'>
          <img className={s.arrowUp} src={images.arrowUp} alt="Arrow Up" />
        </button>
      </form>
    </div>
  );
};

export default TypeInput;
