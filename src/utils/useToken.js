import { useState } from 'react'
export const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('risk-ready-token')
    const userToken = JSON.parse(tokenString)
    return userToken
  }
  const [token, setToken] = useState(getToken)

  const saveToken = (userToken) => {
    localStorage.setItem('risk-ready-token', userToken)
    setToken(userToken)
  }

  const removeToken = () => {
    console.log(JSON.parse(localStorage.getItem('risk-ready-token')))
    localStorage.setItem('risk-ready-token', null)
  }

  return {
    setToken: saveToken,
    getToken,
    token,
    removeToken,
  }
}
