import React, { useState, useEffect } from 'react';
import s from './Chatspace.module.css';
import typing from '../../assets/type.svg';

const Chatspace = ({ messages }) => {
  const [loadingStatic, setLoadingStatic] = useState(true); // Loading state for static text
  const [staticTypedText, setStaticTypedText] = useState(''); // For static text animation
  const [loading, setLoading] = useState(false); // Loading state for dynamic messages
  const [typing, setTyping] = useState(false); // Typing state for dynamic text
  const [typedText, setTypedText] = useState(''); // For dynamic text animation

  const staticText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?";

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoadingStatic(false); // Stop showing the loading indicator after a delay
    }, 3000); // Simulating a 3-second loading time

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!loadingStatic) {
      let i = 0;
      const interval = setInterval(() => {
        setStaticTypedText(staticText.substring(0, i));
        i++;
        if (i > staticText.length) {
          clearInterval(interval);
        }
      }, 50);
    }
  }, [loadingStatic]);

  useEffect(() => {
    if (messages.length > 0) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
        setTyping(true); 
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
          setTyping(false); 
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [typing]);

  useEffect(() => {
    if (messages.length > 0) {
      setTyping(false); 
      setTypedText(''); 
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
                  staticTypedText
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
            {index === messages.length - 1 && (
              <div className={s.heroAnswer}>
                <div className={s.heroImage}></div>
                <div className={s.herotext}>
                  <p className={s.heroName}>Davinchi</p>
                  <p className={s.heroMessageText}>
                    {loading ? (
                      <div className={s.loaderWrap}>
                        <span className={s.loader}></span>
                      </div>
                    ) : (
                      typedText
                    )}
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
