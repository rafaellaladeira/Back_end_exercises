const service = require('../services/booksService');

const getAll = async (_req, res, next) => {
    try {
        const data = await service.getAll();
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await service.getById(id);
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

const addBook = async (req, res, next) => {
    
    try {
        const newData = req.body;
        const data = await service.addBook(newData);
        if (data) return res.status(200).json({ message: "Livro adicionado"}); 
    } catch (error) {
        next(error);
    }
};

const updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newData = req.body;
        const data = await service.updateBook({id, newData});
        if ( data ) return res.status(200).json({ message: 'Book updated'});
    } catch (error) {
        next(error);
    }
};

const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await service.deleteBook(id);
        if (data) return res.status(200).json({message: "Livro deletado com sucesso"});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
    getById,
    addBook,
    updateBook,
    deleteBook,
}