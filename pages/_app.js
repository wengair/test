import React, {createContext, useReducer}from 'react'
import Nav from 'client/components/Nav'
import LoginCheck from 'client/components/LoginCheck'
import './_app.css'
// import App from 'next/app';

const userInitial = {
  isLogin: false, 
  name: 'Guest', 
  pass: '', 
  token:'',
  id:null, 
  error:''
}
export const UserContext = createContext(userInitial)

const loginReducer=(userInfo, action) => {
  switch(action.type) {
    case 'login':
      return {
        ...userInfo,
        isLogin: true,
        name:  action.mail,
        pass:  action.pass,
        id:    action.id,
        token: action.token
      }
    case 'logout':
      localStorage.clear();
      return userInitial
    case 'error':
      return {
        ...userInfo,
        name: '',
        pass: '',
        error: action.error
      }
    default: 
      return userInfo;
  }
}

function App({ Component, pageProps }) {
  const [userInfo, dispatch] = useReducer(loginReducer, userInitial)
  return (
    <UserContext.Provider value={{loginState: userInfo, loginDispatch: dispatch}}>
      <LoginCheck>
        <Nav />
        <Component {...pageProps} />
      </LoginCheck>
    </UserContext.Provider>
    )
  }
  export default App;