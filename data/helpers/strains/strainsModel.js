const db = require('../../dbConfig');

const find = () => {
    return db('strains');
}

const findBy = property => {
    return db('strains')
        .where(property)
}

function add(strain) {
    return db('strains').insert(strain).returning('*');
}

module.exports = {
    find,
    findBy,
    add
}