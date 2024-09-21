import React, { useState, useEffect } from 'react';
import s from './Chatspace.module.css';
import typing from '../../assets/type.svg'

const Chatspace = ({ messages }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messages.length > 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?
              </p>
            </div>
          </div>
        </li>

        {messages.map((message, index) => (
          <li key={index} className={s.userMessageText}>
            <div className={s.userAsk}>
              <p className={s.userName}>You</p>              
              {message}
            </div>
            {loading && index === messages.length - 1 ? ( 
              <div className={s.loadingContainer}>
                <img src={typing} alt="Loading..." className={s.loadingAnimation} />                
              </div>
            ) : (
              <div className={s.heroAnswer}>
                <div className={s.heroImage}></div>
                <div className={s.herotext}>
                  <p className={s.userName}>You</p>
                  <p className={s.heroMessageText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?
                  </p>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Chatspace;
