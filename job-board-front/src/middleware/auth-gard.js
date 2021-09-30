export default () => {
    console.log(window.location.pathname)
    if (window.location.pathname === '/' || window.location.pathname === '/login' || window.location.pathname === '/register') {
        return
    }
    const session = JSON.parse(window.sessionStorage.getItem('session'))
   if (!session || session.expire <= new Date()) {
       window.location.href = '/'
       return
   }
}