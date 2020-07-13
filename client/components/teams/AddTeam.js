import React,{useEffect, useState, useRef} from 'react'
import styles from './AddTeam.module.css'
import useInput from 'client/hooks/useInput'
import { useToasts } from 'react-toast-notifications'

function AddForm(props) {
  const inputRef = useRef(null)
  const [name, bindName, resetName] = useInput('')
  const [city, bindCity, resetCity] = useInput('')
  const [state, bindState, resetState] = useInput('')
  const [stadium, bindStadium, resetStadium] = useInput('')
  const [pic, bindPic, resetPic] = useInput('')
  const { addToast } = useToasts()
  
  const submitHandler = e => {
    e.preventDefault()
    console.log(name)
    console.log(city)
    console.log(state)
    console.log(stadium)
    console.log(pic)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ team_name: name,
                             team_city: city,
                             team_state: state, 
                             team_stadium: stadium,
                             team_pic: pic})
    };
    fetch("http://localhost/wp-json/custom/teams", requestOptions)
    .then(resf => resf.json()) // necessary!
    .then(data => {
        console.log(data)
        props.doRerender()
        resetName('')
        resetCity('')
        resetState('')
        resetStadium('')
        resetPic('')
        addToast('Add team successfully!', {appearance: 'success',autoDismiss: true,})
      })
    .catch(errf => {
      console.log('errf=')
      console.log(errf)
    })
  }

  useEffect(() =>{
    inputRef.current.focus()
  },[])

  return (
      <form onSubmit={submitHandler}>
        <br/><label className={styles.formOptions, styles.firstOption}>Team's Name:<br/>
          <input {...bindName} className={styles.formTextarea} type="text" ref={inputRef}/></label><br/>
        <label className={styles.formOptions}>Team's City:<br/>
          <input {...bindCity} className={styles.formTextarea} type="text"/></label><br/>
        <label className={styles.formOptions}>Team's State:<br/>
          <input {...bindState} className={styles.formTextarea} type="text"/></label><br/>
        <label className={styles.formOptions}>Team's Stadium:<br/>
          <input {...bindStadium} className={styles.formTextarea} type="text"/></label><br/>
        <label className={styles.formOptions}>Team's Picture:<br/>
          <input {...bindPic} className={styles.formTextarea} type="text"/></label><br/>
        <button className={styles.formButton}>Submit</button>
      </form>
  )
}

export default AddForm
