import express from 'express';
import sql from '../models/dbConfig.js';
import user from '../models/userModel.js';
import userController from '../controllers/usersController.js';
const router = express.Router();

router.get("/users", userController.getAllUsers);

router.get("/users/:userId", userController.getItemById );

router.post('/users', userController.create);

router.put('/users/:userId', userController.updateItemById);

router.delete('/users/:userId', userController.deleteItemById);

export default  router;