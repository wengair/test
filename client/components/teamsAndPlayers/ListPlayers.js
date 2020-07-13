import React,{useState, useEffect} from 'react'
import styles from './ListPlayers.module.css'
import AddPlayer from './AddPlayer'


function ListPlayers({players,doRerender,team_id}) {
  const [add, setAdd] = useState(false)
  const [trigger, setTrigger] = useState({})
  let save = []
  // console.log(players)
  const listplayers = players.map( player => {

    return (<div>
      <img src="static/edit.png" alt="edit" style={{width:'15px'}}/>
      <span style={{float:'left'}}>{player.player_name}</span>
      <span style={{float:'right'}}>{player.player_city}, {player.player_state}</span><br/>
    </div>)
  })
  return (
    <div className={styles.playerContainer}>
      <div style={{width:'2rem'}}></div>
      <div className={styles.playerContent}>
      <div><span style={{float:'left'}}>Name</span><span style={{float:'right'}}>From</span><br/></div>
        {listplayers}
        {add 
          ? <div>
              <img src="static/close.png" alt="close" onClick={() => setAdd(!add)} style={{float: 'right'}}/>
              <AddPlayer doRerender={doRerender} team_id={team_id}/>
            </div> 
          : <a onClick={() => setAdd(!add)} style={{cursor:'pointer'}}><img src="static/plus-black.svg" alt='add team' style={{width:'15px'}}></img>Add New player</a>}
      </div>
    </div>
  )
}

export default ListPlayers
