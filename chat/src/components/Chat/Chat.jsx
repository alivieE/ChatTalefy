import React from 'react'
import Chatspace from './ChatSpace/Chatspace'
import TypeInput from '../Typeinput/TypeInput'
import Header from '../Header/Header'
import s from './Chat.module.css'

const Chat = () => {
  return (
    <section className={s.section}>
        <Header></Header>
        <Chatspace></Chatspace>
        <TypeInput></TypeInput>
    </section>
  )
}

export default Chat
