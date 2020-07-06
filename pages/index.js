import React, {createContext, useContext, useEffect, useReducer}from 'react'
import Link from 'next/link'
import useLogin from 'client/hooks/useLogin'
import Lists from 'client/components/list'
import LoginForm from 'client/components/LoginForm'
import Nav from 'client/components/Nav'
import {UserContext} from 'pages/_app'

function Index() {
  const userContext = useContext(UserContext)

  return (
    <>        
      { userContext.loginState.isLogin 
      ? <Lists />
      : <LoginForm />}
    </>
  )
}

export default Index