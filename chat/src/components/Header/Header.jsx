import React from 'react'
import images from '../../assets/index.js'
import s from './Header.module.css'


const Header = () => {
  return (
    <div className={s.mainPart}>
      <div className={s.firtsPartHeader}>
        <p className={s.text}>Chat with character</p>
        <img src={images.close} alt='close'></img>
      </div>
      <div className={s.secondPartHeader}>
        <div className={s.DavinchiPart}>          
          <div className={s.underDavinchi}></div> 
          <p className={s.name}>DAVINCHI</p>         
        </div>
        <img className={s.info} src={images.info} alt='info'></img>
        </div>
    </div>
    
  )
}

export default Header
