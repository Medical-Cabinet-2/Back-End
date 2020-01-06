const db = require('../../dbConfig');

module.exports = {
    getAll
}

const getAll = () => {
    return db('users');
}

