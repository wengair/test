import React, {useState, useEffect} from 'react'
import AddCard from 'client/components/teams/AddCard'
import AddTeam from 'client/components/teams/AddTeam'
import styles from './ListTeams.module.css'

function ListTeams() {
  const [teams, setTeams] = useState([])
  const [add, setAdd] = useState(false)
  const [rerender, setRerender] = useState(false)
  console.log('add now is')
  console.log(add)
  useEffect(() => {
    fetch('http://localhost/wp-json/custom/teams')
    .then(resf => resf.json())
    .then(data => setTeams(data))
    .catch(err => console.log(err))
    return () => {
      // cleanup
    }
  }, [rerender])

  const doRerender = () =>{
    setRerender(!rerender)
    console.log(rerender)
  }
  // console.log('teams=')
  // console.log(teams)
  const teamlist = teams.map((team,index) =>
    <div className={styles.card} key={index}>
      <img src={team.team_pic} alt=""/>
      <p>Team name: {team.team_name}</p>
      <p>Home court: {team.team_stadium}</p>
      <p>Location: {team.team_state}</p>
    </div>
  )
  console.log(teamlist)
  return (
    <div style={{display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center'}}>
      <div style={{width:'80vw',
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   flexWrap:'wrap'}}>
        {teamlist}
        <div>
          {add 
          ? <div className={styles.card}>
              <img src="static/close.png" alt="close" onClick={() => setAdd(!add)} style={{float: 'right'}}/>
              <AddTeam doRerender={doRerender}/>
            </div> 
          : <a onClick={() => setAdd(!add)} style={{cursor:'pointer'}}><AddCard /></a>}
        </div>  
      </div>
    </div>
  )
}

export default ListTeams
