const usersFromStorage = localStorage.getItem('users')
const users = JSON.parse(usersFromStorage) || [];

export default users