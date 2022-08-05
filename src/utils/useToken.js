import { useState } from 'react'
export const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('risk-ready-token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
  }
  const [token, setToken] = useState(getToken)

  const saveToken = (userToken) => {
    localStorage.setItem('risk-ready-token', userToken)
    setToken(userToken.token)
  }

  return {
    setToken: saveToken,
    token,
  }
}
