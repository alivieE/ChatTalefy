import React, {useState} from 'react'
import Chatspace from '../ChatSpace/Chatspace'
import TypeInput from '../Typeinput/TypeInput'
import Header from '../Header/Header'
import s from './Chat.module.css'


const Chat = () => {
  const [messages, setMessages] = useState([]); 

  return (
    <section className={s.section}>
        <Header></Header>
        <Chatspace></Chatspace>
        <TypeInput messages = {messages} setMessages = {setMessages}></TypeInput>
    </section>
  )
}

export default Chat
