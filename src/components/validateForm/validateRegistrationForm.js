import validator from 'validator';

const validateRegistrationForm = (data) =>{
    let errors = {};

    const {email, username, contact, password } = data;

    if (localStorage.users) {
        let lsUsers = localStorage.users;
        lsUsers = JSON.parse(lsUsers);
        let index = lsUsers.findIndex((user) => user.email === email);
        if (index > -1) {
          errors.email = "email already exists!";
        }
    }
    if(validator.isEmpty(username)){
        errors.username = "Username field is required."
    }
    if(validator.isEmpty(email)){
        errors.email = "Email field is required."
    }
    if(validator.isEmpty(contact)){
        errors.contact = "Contact field is required."
    }
    if(validator.isEmpty(password)){
        errors.password = "Password field is required."
    }
    return{
        isInvalid: Object.keys(errors).length > 0, errors: errors,
    };   
};
export default validateRegistrationForm;