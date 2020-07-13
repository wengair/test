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
          <div>
            <Link href="/"><a>Home</a></Link>
            <span>      </span>
            <Link href="/teams"><a>Teams</a></Link>
            <span>      </span>
            <Link href="/modify-all"><a>List all teams and players</a></Link>
          </div>
          <h1>MAC</h1>
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
