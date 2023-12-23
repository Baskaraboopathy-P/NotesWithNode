import User from '../controllers/User';
import { Router } from 'express';
const router = Router();

router.get('/getAllUsers', User.getAllUsers);
router.get('/createUsers', User.createUsers);


export default router