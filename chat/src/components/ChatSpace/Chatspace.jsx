import React, { useState, useEffect } from 'react';
import s from './Chatspace.module.css';
import typing from '../../assets/type.svg';

const Chatspace = ({ messages }) => {
  const [loadingStatic, setLoadingStatic] = useState(true); 
  const [staticTypedText, setStaticTypedText] = useState(''); 
  const [dynamicMessages, setDynamicMessages] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const staticText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?";

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoadingStatic(false); 
    }, 3000);
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
      const lastMessageIndex = messages.length - 1;
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setTyping(true);
      
        const botResponseText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?";
        let i = 0;
        const interval = setInterval(() => {
          setTypedText(botResponseText.substring(0, i));
          i++;
          if (i > botResponseText.length) {
            clearInterval(interval);
            setTyping(false);
            setDynamicMessages((prev) => [...prev, botResponseText]); // Add the bot response to the list
          }
        }, 50);
        
        return () => clearInterval(interval);
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

            {index < messages.length - 1 && (
              <div className={s.heroAnswer}>
                <div className={s.heroImage}></div>
                <div className={s.herotext}>
                  <p className={s.heroName}>Davinchi</p>
                  <p className={s.heroMessageText}>
                    {dynamicMessages[index]}
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