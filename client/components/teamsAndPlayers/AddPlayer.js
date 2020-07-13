import React,{useEffect, useState, useRef} from 'react'
import styles from './AddTeam.module.css'
import useInput from 'client/hooks/useInput'
import { useToasts } from 'react-toast-notifications'

function AddPlayer({doRerender,team_id}) {
  const inputRef = useRef(null)
  const [name, bindName, resetName] = useInput('')
  const [city, bindCity, resetCity] = useInput('')
  const [state, bindState, resetState] = useInput('')
  const { addToast } = useToasts()
  
  const submitHandler = e => {
    e.preventDefault()
    // console.log(name)
    // console.log(city)
    // console.log(state)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ player_name: name,
                             player_city: city,
                             player_state: state, 
                             team_id: team_id})
    };
    fetch("http://localhost/wp-json/custom/players", requestOptions)
    .then(resf => resf.json()) // necessary!
    .then(data => {
        console.log(data)
        doRerender()
        resetName('')
        resetCity('')
        resetState('')
        addToast('Add player successfully!', {appearance: 'success',autoDismiss: true,})
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
        <br/><label className={styles.formOptions, styles.firstOption}>Player's Name:<br/>
          <input {...bindName} className={styles.formTextarea} type="text" ref={inputRef}/></label><br/>
        <label className={styles.formOptions}>Player's City:<br/>
          <input {...bindCity} className={styles.formTextarea} type="text"/></label><br/>
        <label className={styles.formOptions}>Player's State:<br/>
          <input {...bindState} className={styles.formTextarea} type="text"/></label><br/>
        <button className={styles.formButton}>Submit</button>
      </form>
  )
}

export default AddPlayer
