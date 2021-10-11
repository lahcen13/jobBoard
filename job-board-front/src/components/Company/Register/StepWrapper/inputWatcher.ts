import { controleEmail, controleName, controlePassword } from '../../../../functions/FormControle'
export default (data: company, step: number) => {
    const errorArray: Array<string> = [];
    switch (step) {
        case 1:
            //watch
            const name = data.cName
            const email = data.cEmail
            const phone = data.cPhone
            const siret = data.cSiret
            console.log(isNaN(siret as any))
            if (siret.length !== 14 || isNaN(siret as any)) {
                errorArray.push("Siret number must have 14 digits")
            }


            if (!controleEmail(email)) {
                errorArray.push('Email must match patern "myemail@domain.com"')
            }
            console.log(isNaN(phone))
            if (phone.toString().length < 6 || phone.toString().length > 15 || isNaN(phone)) {

                errorArray.push('You must have a valid phone number')
            }
            if (name.length < 1) {
                errorArray.push('You must specify your company name')
            }

            if (errorArray.length > 0) {
                return errorArray
            } else {
                return undefined
            }

        case 2:
            const city = data.cCity
            const postal = data.cPostal
            const address = data.cAddress
            const website = data.cWebsite

            if (!city.match(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/) || city.length < 1) {
                errorArray.push('You must specify a valid city name')
            }

            if (isNaN(postal) || postal.toString().length < 2) {
                errorArray.push('You must specify a valid postal code')
            }

            if (address.length < 5) {
                errorArray.push('You must specify a valid address')
            }

            if (!website.match(/ttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)) {
                errorArray.push('You must specify a valid website link')
            }
            if (errorArray.length > 0) {
                return errorArray
            } else {
                return undefined
            }

            case 3:

            const numOfEmployees = data.cNumOfEmployees
            const contactName = data.cContactName
            const password = data.cPassword
            const confirm = data.cConfirmPassword


            if(isNaN(numOfEmployees) || numOfEmployees < 1) {
                errorArray.push('You must specify a valid number of employees')
            }

            if (contactName.match(/\d/) || contactName.length < 2) {
                errorArray.push('You must specify a valid contact Name')
            }

            if (!controlePassword(password)) {
                errorArray.push('your password must contain at least one upperCase letter, one special character and one digit  and contain at least 8 characters')
            }

            if (password !== confirm) {
                errorArray.push('Password must match with confirm password field')
            }
                

                if (errorArray.length > 0) {
                    return errorArray
                   }else {
                       return undefined
                   }


        default:
            break;
    }
}





interface company {
    cName: string,
    cEmail: string,
    cPhone: number,
    cSiret: string,
    cCity: string,
    cPostal: number,
    cAddress: string,
    cWebsite: string,
    cNumOfEmployees: number,
    cPassword: string,
    cConfirmPassword: string,
    cContactName: string
}