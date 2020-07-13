import React, {useState, useEffect} from 'react'
import styles from './ListAll.module.css'
import ListPlayers from './ListPlayers'
import AddTeam from './AddTeam'


function ListAll() {
  const [teams, setTeams] = useState([])
  const [players, setPlayers] = useState([])
  const [add, setAdd] = useState(false)
  const [rerender, setRerender] = useState(false)
  useEffect(() => {
    fetch('http://localhost/wp-json/custom/teams')
    .then(resf => resf.json())
    .then(data => setTeams(data))
    .catch(err => console.log(err))
    return () => {
      // cleanup
    }
  }, [rerender])

  useEffect(() => {
    fetch('http://localhost/wp-json/custom/players')
    .then(resf => resf.json())
    .then(data => setPlayers(data))
    .catch(err => console.log(err))
    return () => {
      // cleanup
    }
  }, [rerender])
  // const team1 = players.filter(player => player.team_id == 1)
  // console.log(team1)
  const doRerender = () =>{
    setRerender(!rerender)
    // console.log(rerender)
  }
  // console.log('teams=')
  // console.log(teams)
  const teamlist = teams.map((team,index) =>
    <div className={styles.card} key={index}>
      <h2>{team.team_name}</h2>
      <p>Home court: {team.team_stadium}</p>
      <p>Location: {team.team_state}</p>
      {/* {console.log('in team.map')} */}
      {/* {console.log(players.filter(player => player.team_id == team.team_id))} */}
      <ListPlayers players={players.filter(player => player.team_id == team.team_id)} doRerender={doRerender} team_id={team.team_id}/>
    </div>
  )
  return (
    <div className='contentContainer'>
      <div style={{width:'80vw',
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexWrap:'wrap',
                   flexDirection:'column'}}>
        {teamlist}
        <div className={styles.card}>
        {add 
          ? <div>
              <img src="static/close.png" alt="close" onClick={() => setAdd(!add)} style={{float: 'right'}}/>
              <AddTeam doRerender={doRerender}/>
            </div> 
          : <a onClick={() => setAdd(!add)} style={{cursor:'pointer'}}><img src="static/plus-black.svg" alt='add team'></img>Add New Team</a>}
        </div>
      </div>
    </div>
  )
}

export default ListAll
