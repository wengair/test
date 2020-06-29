import React, {useContext, useEffect, useState, useRef}    from 'react'
import useInput from 'client/hooks/useInput'
import useLogin from 'client/hooks/useLogin'
import Link   from 'next/link'
import Router from 'next/router'
import styles from './Login.module.css'
import UserContext from 'pages/index'
import axios from 'axios'
import WPAPI from 'wpapi'


function index() {
  const inputRef = useRef(null)
  const [email, bindEmail, resetEmail] = useInput('')
  const [pass, bindPass, resetPass] = useInput('')
  const [isLogin, userLogin, userLogout, userToken] = useLogin()
  const [loading, setLoading] = useState()
  const toeknUrl = process.env.getTokenUrl
  
  useEffect(() =>{
    inputRef.current.focus()
  },[])

  const submitHandler = e => {
    e.preventDefault()
    // ----------axios version get token---------------
    // axios.post(toeknUrl, {username: email, password: pass})
    //   .then(res => {
    //       // console.log(`res=`)
    //       // console.log(res)
    //       // console.log(res.data.token)
    //       userLogin(email, res.data.token)
    //       console.log('here')
    //       console.log(userToken())
    //     })
    //     .catch(err => {
    //         // console.log('err=')
    //         // console.log(err)
    //       })
    // ------------------------------------------------
    
    // ----------fetch version get token---------------
    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ username: email, password:pass })
    // };
    // fetch(toeknUrl, requestOptions)
    // .then(resf => resf.json()) // necessary!
    // .then(data => {
    //   if(data.token){
    //     console.log(data)
    //   } else {
    //     console.log("login fail")
    //   }
    // })
    // .catch(errf => {
    //   console.log('errf=')
    //   console.log(errf)
    // })
    // ------------------------------------------------

    // ----------fetch version get cookie---------------
    let formData = new FormData()
    formData.append('username', email)
    formData.append('password', pass)

    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'multipart/form-data' },
      // body: { username: email, password:pass }
      body: formData
    };
    fetch("http://localhost/wp-json/custom/login", requestOptions)
    .then(resf => resf.json()) // necessary!
    .then(data => {
        if(data.user){
          console.log(data)
          console.log(data.nonce)
          userLogin(email, data.nonce)
          console.log(`userToken=${userToken}`)
          console.log(isLogin)
          // var AuthCookie = localStorage.getItem("auth")
          // console.log(AuthCookie)
          Router.push('/')
        } else {
          console.log("login fail")
        }
      })
    .catch(errf => {
      console.log('errf=')
      console.log(errf)
    })
    console.log(`userToken=${userToken}`)
    console.log(userToken)
    console.log(isLogin)
    // ------------------------------------------------
    if (email==='aaa@hotmail.com' && pass==='test'){
      // userLogin(email)
      // console.log('usertoken=')
      // console.log(userToken)
      // console.log('end')
      alert('Success!')
      // resetEmail()
      // resetPass()      
      // Router.push('/')
    } else{
      e.preventDefault()
      alert('Try again!')
      // console.log(user)
      // console.log(user.login)
      // console.log(user.name)
    }

  }
  return (
    <div className={styles.formConatainer}>
        <form onSubmit={submitHandler} className={styles.form}>
          <div className={styles.formOption}>
            <label style={{width:"100px"}}>E-mail:  </label>
            <input {...bindEmail} ref={inputRef} type="text" className={styles.formTextarea}/>
          </div>
          <div className={styles.formOption}>
            <label style={{width:"100px"}}>Password:</label>
            <input {...bindPass} type="password" className={styles.formTextarea}/>
          </div>
          <div style={{display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'stretch'}}>
            <button className={styles.formSubmit}>Submit</button>
          </div>
        </form>
        <div>
          <Link href="/"><a>Home</a></Link>
          <p>{isLogin ? email : null}</p>
          {/*console.log(`login status is ${isLogin}`)*/}
        </div>
    </div>
  )
}

export default index
