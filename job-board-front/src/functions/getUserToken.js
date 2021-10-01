export default () => {
    const sessionToken = JSON.parse(sessionStorage.getItem('session'))
    const permanantToken = JSON.parse(localStorage.getItem('session'))
    if (sessionToken) return sessionToken.token;
    if (permanantToken) return permanantToken.token;
}