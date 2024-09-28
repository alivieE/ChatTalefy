import React, { useState, useEffect } from 'react';
import s from './Chatspace.module.css';
import Typewriter from 'typewriter-effect';

const Chatspace = ({ messages }) => {
  const [loadingIndexes, setLoadingIndexes] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadingIndexes([0]);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleNewMessage = (index) => {
    setLoadingIndexes((prev) => [...prev, index]);
  };

  return (
    <section className={s.section}>
      <ul className={s.messagesList}>
        <li className={s.messagesListItem}>
          <div className={s.heroAnswer}>
            <div className={s.heroImage}></div>
            <div className={s.herotext}>
              <p className={s.heroName}>Davinchi</p>
              <p className={s.heroMessageText}>
                {!loadingIndexes.includes(0) ? (
                  <div className={s.loaderWrap}>
                    <span className={s.loader}></span>
                  </div>
                ) : (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter.typeString(
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?").start();
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
            <div className={s.heroAnswer}>
              <div className={s.heroImage}></div>
              <div className={s.herotext}>
                <p className={s.heroName}>Davinchi</p>
                <p className={s.heroMessageText}>
                  {!loadingIndexes.includes(index + 1) ? (
                    <div className={s.loaderWrap}>
                      <span className={s.loader}></span>
                    </div>
                  ) : (
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString(
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?").start();
                      }}
                    />
                  )}
                </p>
              </div>
            </div>
            {!loadingIndexes.includes(index + 1) && setTimeout(() => handleNewMessage(index + 1), 3000)}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Chatspace;
