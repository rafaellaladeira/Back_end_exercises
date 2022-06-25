 const charactersModel = require('../model/characters');

const getAll = async () => {
    const data = await charactersModel.getAll();
    return data;
}

module.exports = {
    getAll
}