import React from 'react'
import ChatBar from '../../Components/ChatBar/ChatBar'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={`row ${styles.homeContainer}`} >
        <div className={`col-4 ${styles.chatBarContainer} `} >
            <ChatBar/>
        </div>
        <div className={`col-8`} >
        </div>
    </div>
  )
}

export default Home