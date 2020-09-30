import users from './user.js'

const tableUsers = document.getElementById('table-users')
const cardInfo = document.getElementById('card-info')

// Mostrar todos

function getTableName() {
    tableUsers.innerHTML = ''
    for(var i = 0; i < users.length; i++) {
        const row = `<tr>
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
            <td>${users[i].email}</td>
        </tr>`
        tableUsers.innerHTML += row
    }
}


// Mostrar Mayores de 20 y menores de 40

function getTableAge() {
    tableUsers.innerHTML = ''
    for(var i = 0; i < users.length; i++) {
        if((users[i].age >= 20) && (users[i].age <= 40)) {
            const row = `<tr>
                <td>${users[i].name}</td>
                <td>${users[i].age}</td>
                <td>${users[i].email}</td>
            </tr>`
            tableUsers.innerHTML += row
        }
    }
}


// Mostrando emails de Academlo

function getTableEmail() {
    tableUsers.innerHTML = ''
    for(var i = 0; i < users.length; i++) {
        if(users[i].email.endsWith('academlo.com')) {
            const row = `<tr>
                <td>${users[i].name}</td>
                <td>${users[i].age}</td>
                <td>${users[i].email}</td>
            </tr>`
            tableUsers.innerHTML += row
        }
    }
    
}

// Mostrar Redes Sociales

function getCardSocial() {
    tableUsers.innerHTML = ''
    let cardDescription = ''
    for(var i = 0; i < users.length; i++) {
        let social = users[i].social
        cardDescription += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${users[i].name}</h5>
            <p class="card-text">${users[i].age}</p>`
        for(var j = 0; j < social.length; j++) {
            cardDescription += `<a href="#" class="btn btn-primary">${social[j].url}</a>`
        }
        cardDescription += `<p class="card-text">${users[i].gender}</p>
        </div></div>`
    }
    cardInfo.innerHTML += cardDescription
}

// Mostrar Mujeres

function getTableFemale() {
    tableUsers.innerHTML = ''
    for(var i = 0; i < users.length; i++) {
        if(users[i].gender === 'Female') {
            const row = `<tr>
                <td>${users[i].name}</td>
                <td>${users[i].age}</td>
                <td>${users[i].email}</td>
            </tr>`
            tableUsers.innerHTML += row
        }
    }
}


window.getTableName = getTableName
window.getTableAge = getTableAge
window.getTableEmail = getTableEmail
window.getCardSocial = getCardSocial
window.getTableFemale = getTableFemale
