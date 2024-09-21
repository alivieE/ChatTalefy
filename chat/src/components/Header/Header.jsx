import React from 'react'
import images from '../../assets/index.js'
import s from './Header.module.css'
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

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
        <Tooltip  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 1500 }}        
  title="Leonardo da Vinci was a Renaissance polymath known for his 
                                    contributions to art, science, and invention. His masterpieces, like the Mona Lisa 
                                    and The Last Supper, and his visionary sketches of flying machines, human anatomy, and mechanical devices, 
                                    showcase his genius across multiple disciplines.">
          <img className={s.info} src={images.info} alt='info'></img>
        </Tooltip>
        </div>
    </div>
    
  )
}

export default Header
