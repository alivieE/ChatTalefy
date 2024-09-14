import React from 'react'
import s from './Chatspace.module.css'
import images from '../../assets/index.js'

const Chatspace = ({messages}) => {
  
  return (
    <section className={s.section}>
      <ul className={s.messagesList}>
        <li className={s.messagesListItem}>
          <div className={s.heroAnswer}>
            <div className={s.heroImage} ></div>
            <div className={s.herotext}>
              <p className={s.heroName}>Davinchi</p>
              <p className={s.heroMessageText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?</p>
            </div>
          </div>
        </li>
        
          {messages.map((message, index) => (
            <li key={index} className={s.heroMessageText}>              
              <div className={s.userAsk}><p className={s.userName}>You</p>{message}</div>              

              
              <div className={s.heroAnswer}>
              <div className={s.heroImage} ></div>
              <div className={s.herotext}>
                <p className={s.heroName}>You</p>
                <p className={s.heroMessageText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, illo? Dolore labore illum esse ducimus. Ab deleniti in fugiat exercitationem?</p>
              </div>
          </div>
            </li>
          ))}
      </ul>
      <div>
          
        </div>
    </section>
    
  )
}

export default Chatspace
