const { Book } = require('../models/');
const errorObj = require('../helpers/errorObject');

const getAll = async () => {
    const data = await Book.findAll();
    if (data.length === 0 ) return [];
    if (data.length > 0) return data;
    throw errorObj[0];
};

const getById = async (id) => {
    const data = await Book.findOne({
        where: {id: id} });
    if ( data === 0 || undefined) throw errorObj[1];
    return data;
};

const addBook = async ({title, author, pageQuantity}) => {
    const data = await Book.create({ title, author, pageQuantity});
    console.log(data);
    if (data) return true;
};

const updateBook = async ({id, newData}) => {
    const { title, author, pageQuantity } = newData;
    const data = await Book.findOne({where : {id}});
    if (data === null) throw errorObj[1];
    const result = await Book.update({title, author,pageQuantity}, {where : {id}})
    return result;
};

const deleteBook = async (id) => {
    const data = await Book.destroy({ where: {id}});
    if (data) return true;
};

module.exports = {
    getAll,
    getById,
    addBook,
    updateBook,
    deleteBook
}