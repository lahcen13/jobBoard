import { get } from "../functions/session"

export default () => {
    console.log('AUTH')
  
    if (window.location.pathname === '/' || window.location.pathname === '/admin/login' || window.location.pathname === '/company/login' || window.location.pathname === '/company/register' || window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/adverts') {
        return
    }

    const session = JSON.parse(get())
    if (!session) {
        window.location.href = '/'
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