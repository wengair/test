import {useState, useContext, useEffect} from 'react'
import {UserContext} from 'pages/index'

function useLogin(userInfo = 'Guest', userToken = '') {
  const [login, setLogin] = useState(false)
  // const [name, setName] = useState('')
  // const [token, setToken] = useState('')
  // const user = {login: false, name: ''}
  const user = useContext(UserContext)
  // console.log('in useLogin')
  // console.log(`user = ${user}`)
  // console.log(`user.name = ${user.name}`)
  // console.log(`user.login = ${user.login}`)
  // var WPAPI = require( 'wpapi' );
  // var wp = new WPAPI({
  //     endpoint: 'localhost:80/wp-json',
  //     username: 'wengyagami@hotmail.com',
  //     password: '4%'
  // });

  // console.log(wp.users().me())





  const isLogin = () =>{
    user.login
  }

  const userLogin = (userInfo, userToken)  => {
    console.log(`in userLogin, usertoken = ${userToken}`)
    user.login = true
    user.name = userInfo
    user.token = userToken
    // console.log(user.login)
    // console.log(user.name)
    console.log(user.token)
  }

  const userLogout = (userInfo)  => {
    user.login = false
    user.name = 'Guest'
  }

  return [login, userLogin, userLogout, user.token]
}

export default useLogin
