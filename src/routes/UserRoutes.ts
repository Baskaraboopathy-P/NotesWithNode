import User from '../controllers/User';
import { Router } from 'express';

const router = Router();

router.post('/createUser', User.createUsers);
router.get('/getAllUsers', User.getAllUsers);
router.get('/getUsersById/:id', User.getUsersById);
router.put('/updateUser/:id', User.UpdateUser);
router.put('/deleteUser/:id', User.deleteUser);
router.post('/authUser', User.authUser);


export default router