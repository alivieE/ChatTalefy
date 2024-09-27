import React, { useState, useEffect } from 'react';
import s from './Chatspace.module.css';
import typing from '../../assets/type.svg'

const Chatspace = ({ messages }) => {
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (messages.length > 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setTyping(true); // set typing to true after 3 seconds
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [messages]);

  useEffect(() => {
    if (typing) {
      const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?";
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(text.substring(0, i));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setTyping(false); // reset typing state after animation finishes
        }
      }, 50);
    }
  }, [typing]);

  useEffect(() => {
    if (messages.length > 0) {
      setTyping(false); // reset typing state when new message arrives
      setTypedText(''); // reset typed text
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
          <li key={index} className={s.messagesListItem}>
            <div className={s.userAsk}>
              <p className={s.userName}>You</p>              
              {message}
            </div>
            
            <div className={s.heroAnswer}>
              <div className={s.heroImage}></div>
              <div className={s.herotext}>
                <p className={s.heroName}>Davinchi</p>
                <p className={s.heroMessageText}>
                  {loading && index === messages.length - 1 ? (
                    <div className={s.loaderWrap}>
                      <span className={s.loader}></span>                      
                    </div>
                  ) : (
                    typedText
                  )}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Chatspace;