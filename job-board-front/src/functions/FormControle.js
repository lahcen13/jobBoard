const controleEmail = (email) => {
    return (email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]/i)) ? true : false;
}

const controleName = (name) => {
    return (name.match(/[a-zA-Z]+$/)) ? true : false;
}

const controlePassword = (password) => {
    return (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/) ? true : false);
}

const controlePhone = (phone) => {
    return (phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/) ? true : false);
}

const controlePostalCode = (postalCode) => {
    return (postalCode.match(/^[0-9]{5}$/) ? true : false);
}


export { controleEmail, controleName, controlePassword, controlePhone, controlePostalCode }
