import expireDate from './expireDate'

const set = (token: string, perm: boolean) => {

    if (perm) {
        const data: session = { token: token, expire: expireDate().toString() }
      return  localStorage.setItem("session", JSON.stringify(data))
    }
    const data: session = { token: token, expire: expireDate().toString() }
   return sessionStorage.setItem("session", JSON.stringify(data));
}


const get = () => {
    const perm = localStorage.getItem('session')
    if (perm) return perm
    return sessionStorage.getItem('session')
}

interface session {
    token: string,
    expire: string,
  }


  export {set, get}