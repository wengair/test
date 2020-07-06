import React,{useContext, useRef, useEffect} from 'react'
import useInput from 'client/hooks/useInput'
import {UserContext} from 'pages/_app'
import Router from 'next/router'
import styles from '../styles/LoginForm.module.css'

function LoginForm() {
  const inputRef = useRef(null)
  const [email, bindEmail, resetEmail] = useInput('')
  const [pass, bindPass, resetPass] = useInput('')
  const userContext = useContext(UserContext)
  const toeknUrl = process.env.getTokenUrl
  

  const submitHandler = e => {
    // ----------fetch version get token---------------
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password:pass })
    };
    fetch(toeknUrl, requestOptions)
    .then(resf => resf.json())
    .then(data => {
      if(data.token){
        // success login
        console.log(data)
        userContext.loginDispatch({type:'login', token:data.token, mail:data.user_display_name, pass:pass, id:data.id})
        localStorage.setItem('userInfo', JSON.stringify({name:data.user_display_name, token:data.token}))
        Router.push('/')
      } else {
        // wrong information
        userContext.loginDispatch({type:'error', error:'wrong email or password'})
        resetEmail('')
        resetPass('')
      }
    })
    .catch(err => {
      // other errors
      userContext.loginDispatch({type:'error', error:err})
    })
    // ------------------------------------------------
    e.preventDefault()
  }

  useEffect(() =>{
    inputRef.current.focus()
  },[])

  return (
    <div className={styles.formConatainer}>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.formOption}>
          <label className={styles.formLabel}>E-mail: </label>
          <input {...bindEmail} type="text" className={styles.formTextarea} ref={inputRef}/>
        </div>
        <div className={styles.formOption}>
          <label className={styles.formLabel}>Password: </label>
          <input {...bindPass} type="password" className={styles.formTextarea}/>
        </div>
        <div style={{height:'10px',textAlign:'center'}}>
          {userContext.loginState.error && !email && <span style={{color:'red'}}>Wrong email or password</span>}
        </div>
        <button className={styles.formSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
