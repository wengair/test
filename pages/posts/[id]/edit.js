import React, {useContext, useRef,useEffect} from 'react'
import styles from 'client/styles/Edit.module.css'
import {UserContext} from 'pages/_app'
import useInput from 'client/hooks/useInput'

function edit({post}) {
  const inputRef = useRef(null)
  const userContext = useContext(UserContext)
  const [title, bindTitle, resetTitle] = useInput('')
  const [content, bindContent, resetContent] = useInput('')
  const postsUrl = process.env.getPostsUrl
  
  console.log('in edit')
  console.log(userContext.loginState)
  
  // console.log('post=')
  // console.log(post)
  
  const submitHandler = e => {
    e.preventDefault()
    const localStorageRef = JSON.parse(localStorage.getItem('userInfo'))
    const id = Number(window.location.pathname.split("/")[2])
    const updatePostUrl = postsUrl+`/${id}`
    // ----------fetch version get token---------------
    const requestOptions = {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + localStorageRef.token },
      body: JSON.stringify({ title: title, content:content })
    };
    fetch(postsUrl, requestOptions)
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
    console.log('haha')
  }
  useEffect(() => {
    const id = Number(window.location.pathname.split("/")[2])
    // console.log(window.location)
    // console.log(id)
    // console.log(postsUrl+`/${id}`)
    fetch(postsUrl+`/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        resetTitle(data.slug)
        resetContent(data.excerpt.rendered)
        // content = data.excerpt.rendered
      })
      .catch(err=>console.log(err))
    return () => {
      // cleanup
    }
  }, [title,content])

  return (
    <div className="formConatainer">
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.formOption}>
          <label className={styles.formLabel}>Title: </label>
          <input {...bindTitle} name='title' type="text" className={styles.formText} ref={inputRef}/>
        </div>
        <div className={styles.formOption}>
          <label className={styles.formLabel}>Content: </label>
          <textarea {...bindContent} name='content' type="textarea" className={styles.formTextArea}/>
        </div>
        <div style={{height:'10px',textAlign:'center'}}>
          {userContext.error && !email && <span style={{color:'red'}}>Wrong email or password</span>}
        </div>
        <button className={styles.formSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default edit
