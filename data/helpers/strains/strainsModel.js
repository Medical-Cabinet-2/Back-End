const db = require('../../dbConfig');

const find = () => {
    return db('strains');
}

const findBy = property => {
    return db('strains')
        .where(property)
}

module.exports = {
    find,
    findBy
}