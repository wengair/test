import React,{useContext} from 'react'
import styles from '../styles/Nav.module.css'
import {UserContext} from 'pages/_app'
import Link from 'next/link'

function Nav() {
  const userContext = useContext(UserContext)
  console.log('in nav')
  console.log(userContext)

  const logoutHandler = (e) =>{
    // e.preventDefault()
    console.log("in logoutHandler")
    userContext.loginDispatch({type:'logout'})
    localStorage.clear();
  }
  return (
    <div className={styles.nav}>
          <Link href="/"><a>Home</a></Link>
          <h1>MAC posts</h1>
            <div>
              <span>{userContext.loginState.name}   </span>
              { userContext.loginState.isLogin &&
              <Link href="/"><a onClick={logoutHandler}>Log out</a></Link>
              }
            </div>
        </div>
  )
}

export default Nav
