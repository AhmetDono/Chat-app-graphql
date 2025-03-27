import React from 'react'
import {Link} from 'react-router-dom'
import styles from './ChatBar.module.css'
// import users from '../../Data/Users'
import { useQuery } from '@apollo/client'
import {GET_USERS} from './queries.js'


function ChatBar() {
  const userId = localStorage.getItem('userId');
  console.log(userId)
  const {loading,error,data} = useQuery(GET_USERS);


  if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={`row ${styles.chatBarContainer}`}>
      {data.users.map((user,index) => {
        return (
          <Link to={`/chat/${user.id}`} className={`row ${styles.userContainer}`} >
            <div className={`col-3 ${styles.imageContainer}`} >
              <img src={user.profilePicture} alt='deneme'/>
            </div>
            <div className={`col-6 ${styles.userInfoContainer} `} >
              <h5>{user.id === userId ? `${user.name} (Siz)` : user.name}</h5>
              <p>Tesekkur ederim</p>
            </div>
            <div className={`col-3 ${styles.messageNotificationContainer} `} >
              <span class="badge badge-secondary">1</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ChatBar