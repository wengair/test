import {useContext, useEffect} from 'react'
import {UserContext} from 'pages/_app'

function LoginCheck(props) {
  const userContext = useContext(UserContext)
  console.log('run LoginCheck')
  useEffect(() =>{
    const localStorageRef = JSON.parse(localStorage.getItem('userInfo'))
    // console.log('localStorageRef =')
    // console.log(localStorageRef.token)
    if(!userContext.loginState.isLogin && localStorageRef){
      const requestOptions1 = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + localStorageRef.token },
        };
      fetch('http://localhost/wp-json/wp/v2/users/me', requestOptions1) 
      // test if token can be used on other api
        .then(resf1 => resf1.json()) // necessary!
        .then(data1 => {
          userContext.loginDispatch({type:'login', token:localStorageRef.token, mail:data1.name, pass:'', id:data1.id})
          Router.push('/')
        })
        .catch(err  => console.log(err))
    } 
  },[])
  return props.children
}

export default LoginCheck
