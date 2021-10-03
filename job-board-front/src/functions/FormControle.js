const controleEmail = (email) => {
    return (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]/i)) ? true : false;
}

const controleName = (name) => {
    return (name.match(/[a-zA-Z]+$/)) ? true : false;
}

const controlePassword = (Password) => {
    return (Password.match(/[a-zA-Z]+$/)) ? true : false;
}



export { controleEmail, controleName, controlePassword }