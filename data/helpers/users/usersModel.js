const db = require('../../dbConfig');


const getAll = () => {
    return db('users');
}


module.exports = {
    getAll
}