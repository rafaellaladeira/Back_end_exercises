const { Router } = require('express');
const routes = Router();
const control = require('./controllers/booksControl');

routes.get('/', control.getAll);
routes.get('/:id', control.getById);
routes.post('/', control.addBook);
routes.put('/:id', control.updateBook);
routes.delete('/:id', control.deleteBook);



module.exports = routes;