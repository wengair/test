import React, {useContext}from 'react'
import Link from 'next/link'
import styles from './index.module.css'
import useLogin from 'client/hooks/useLogin'
import Lists from 'client/components/list'

const userInitial = {login: false, name: 'Guest', token:''}
export const UserContext = React.createContext(userInitial)

export default function Index() {
  const [isLogin, userLogin, userLogout, userToken] = useLogin()
  const user = useContext(UserContext)
  console.log(user.name)
  console.log('userToken =')
  console.log(userToken)
  return (
    <>
      <UserContext.Provider>
        <div className={styles.nav}>
          <Link href="/"><a>Home</a></Link>
          <h1>MAC posts</h1>
            <div>
              <span>{user.name}   </span>
              { user.login ?
              <Link href="/" onClick={userLogout()}><a>Log out</a></Link>
              : <Link href="/login"><a>Log In</a></Link>
              }
            </div>

        </div>
        <div style={{display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center'}}>
          <div style={{width:'80vw'}}>
            <Lists />
          </div>
        </div>
      </UserContext.Provider>
      <style jsx global>{`body { margin:0px; }`}</style>
    </>
  )
}
