import { WindowSidebar } from 'react-bootstrap-icons'
import expireDate from './expireDate'

const set = (token: string, perm: boolean) => {

  if (perm) {
    const data: session = { token: token, expire: expireDate().toString() }
    return localStorage.setItem("session", JSON.stringify(data))
  }
  const data: session = { token: token, expire: expireDate().toString() }
  return sessionStorage.setItem("session", JSON.stringify(data));
}


const get = () => {
  const perm = localStorage.getItem('session')
  if (perm) return perm
  return sessionStorage.getItem('session')
}


const remove = () => {

  window.sessionStorage.removeItem('session')
  window.localStorage.removeItem('session')
  window.location.href = '/login';

}

interface session {
  token: string,
  expire: string,
}


export { set, get, remove }