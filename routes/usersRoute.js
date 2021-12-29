import express from 'express';
import sql from '../models/dbConfig.js';
import user from '../models/userModel.js';
import userController from '../controllers/usersController.js';
const router = express.Router();

router.get("/users", userController.getAllUsers);

router.get("/users/:userid", userController.getItemById );

router.post('/users', userController.create);

router.put('/users/:id', userController.updateItemById);

export default  router;