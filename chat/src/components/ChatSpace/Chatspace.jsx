import React, { useState, useEffect } from 'react';
import s from './Chatspace.module.css';
import typing from '../../assets/type.svg';
import Typewriter from 'typewriter-effect';

const Chatspace = ({ messages }) => {
  const [loadingStatic, setLoadingStatic] = useState(true); 
  

  useEffect(() => {
    if (messages.length > 0) {
      const lastMessageIndex = messages.length - 1;
        setTimeout(() => {
        
      
        const botResponseText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?";
        let i = 0;
        
        
        return () => clearInterval();
      }, 3000);
    }
  }, [messages]);

  return (
    <section className={s.section}>
      <ul className={s.messagesList}>        
        <li className={s.messagesListItem}>
          <div className={s.heroAnswer}>
            <div className={s.heroImage}></div>
            <div className={s.herotext}>
              <p className={s.heroName}>Davinchi</p>
              
              <p className={s.heroMessageText}>
                {loadingStatic ? (
                  <div className={s.loaderWrap}>
                    <span className={s.loader}></span> 
                  </div>
                ) : (
                  <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?").start();         
      
  }}
/>
                )}
              </p>
            </div>
          </div>
        </li>

        {messages.map((message, index) => (
          <li key={index} className={s.messagesListItem}>

            <div className={s.userAsk}>
              <p className={s.userName}>You</p>
              <p className={s.userMessageText}>{message}</p>
            </div>

            {index < messages.length - 1 && (
              <div className={s.heroAnswer}>
                <div className={s.heroImage}></div>
                <div className={s.herotext}>
                  <p className={s.heroName}>Davinchi</p>
                  <p className={s.heroMessageText}>
                    
                  </p>
                </div>
              </div>
            )}

            {index === messages.length - 1 && (
              <div className={s.heroAnswer}>
                <div className={s.heroImage}></div>
                <div className={s.herotext}>
                  <p className={s.heroName }>Davinchi</p>
                  <p className={s.heroMessageText}>
                    
                  </p>
                </div>
              </div>
            )}
          </li>

        ))}
        <li>
        
        </li>
      </ul>
    </section>
  );
};

export default Chatspace;