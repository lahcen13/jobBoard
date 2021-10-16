import jwtDecode from "jwt-decode"
import getUserToken from "../functions/getUserToken"
import { get } from "../functions/session"
import { getUser } from '../functions/session.tsx'

export default () => {


    if (window.location.pathname === '/' || window.location.pathname === '/admin/login' || window.location.pathname === '/company/login' || window.location.pathname === '/company/register' || window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/adverts') {
        return
    }
  

    const session = JSON.parse(get())
    if (!session) {
        window.location.href = '/'
    }

  const token = getUserToken()
  const user = jwtDecode(token)
const path = window.location.pathname
  if (user.role === 'user' && path.startsWith('/company') || user.role === 'user' && path.startsWith('/admin')) {
      window.location.href = '/adverts'
  }

  if (user.role === 'admin' && !path.startsWith('/admin')) {
    window.location.href = '/admin'
  }

  if (user.role === 'company' && !path.startsWith('/company')) {
    window.location.href = '/company'
  }
    console.log(Date.parse(new Date()))
    console.log("EXPIRE AT ", Date.parse(session.expire))
    console.log(session)

    if (Date.parse(new Date()) < Date.parse(session.expire)) {
        return
    }
    else {
        sessionStorage.removeItem('session')
        window.location.href = '/'
        console.log('expired')
    }

}