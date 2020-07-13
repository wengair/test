import React, {createContext, useReducer}from 'react'
import Nav from 'client/components/Nav'
import LoginCheck from 'client/components/LoginCheck'
import { ToastProvider, useToasts } from 'react-toast-notifications'
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

const FormWithToasts = () => {
  const { addToast } = useToasts()

  const onSubmit = async value => {
    const { error } = await dataPersistenceLayer(value)

    if (error) {
      addToast(error.message, { appearance: 'error' })
    } else {
      addToast('Saved Successfully', { appearance: 'success' })
    }
  }

  return <form onSubmit={onSubmit}>...</form>
}

function App({ Component, pageProps }) {
  const [userInfo, dispatch] = useReducer(loginReducer, userInitial)
  return (
    <ToastProvider>
      <UserContext.Provider value={{loginState: userInfo, loginDispatch: dispatch}}>
        <LoginCheck>
          <Nav />
          <Component {...pageProps} />
        </LoginCheck>
      </UserContext.Provider>
    </ToastProvider>
    )
  }
  export default App;