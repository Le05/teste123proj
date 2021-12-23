const express = require('express');
const routes = express.Router();
const userController = require('./controllers/userController');

routes.post('/user/create',userController.create);
routes.put('/user/update/:id',userController.update);
routes.delete('/user/delete/:id',userController.delete);
routes.get('/user/getAll',userController.getAll);
routes.get('/user/getById/:id',userController.getById);


module.exports = routes; 