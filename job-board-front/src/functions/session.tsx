import { WindowSidebar } from 'react-bootstrap-icons'
import expireDate from './expireDate'

const set = (token: string, perm: boolean, user: user) => {

  if (perm) {
    const data: session = { token: token, expire: expireDate().toString(), user: user }
    return localStorage.setItem("session", JSON.stringify(data))
  }
  const data: session = { token: token, expire: expireDate().toString(), user: user }
  return sessionStorage.setItem("session", JSON.stringify(data));
}


const get = ():null | string => {
  const perm = localStorage.getItem('session')
  if (perm) return perm
  return sessionStorage.getItem('session')
}

const getUser = () => {
    const session = get()
    return session ? JSON.parse(session).user : undefined
  
}


const remove = () => {

  window.sessionStorage.removeItem('session')
  window.localStorage.removeItem('session')
  window.location.href = '/';

}

interface session {
  token: string,
  expire: string,
  user: user
}

interface user {
  id: number,
  email: string
}

export { set, get, remove, getUser }