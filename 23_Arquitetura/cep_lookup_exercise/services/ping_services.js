const model = require('../model/ping');

const ping = async (id) => {
    const data = await model.getAll(id);
    return data;
}

module.exports = {
    ping
}