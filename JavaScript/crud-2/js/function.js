import users from './users.js'

function registerUser() {
    const email = document.getElementById('register-email').value
    const password = document.getElementById('register-password').value
    let idUser = 0
    let newUser = {}

    if(users.length === 0) {
        newUser = {
            id: idUser,
            email: email,
            password: password
        }
    } else {
        newUser = {
            id: idUser + 1,
            email: email,
            password: password
        }
    }

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    location.replace("/login.html")
}

function loginUser() {
    const email = document.getElementById('login-email').value
    const password = document.getElementById('login-password').value
    // const validationUsers = users.filter((user) => )
    users.forEach((user) => {
        if((email === user.email) && (password === user.password)) {
            location.replace("/protection.html")
        } else {
            location.replace("./login.html")
            alert("Email or password incorrect")
        }
    })
}

function pageProtection() {
    
}





window.registerUser = registerUser
window.loginUser = loginUser