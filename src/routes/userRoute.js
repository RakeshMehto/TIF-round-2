import express from 'express';
import { getAll, getSingle, signin, signup} from '../controllers/userController'
import { auth } from '../middlewares/auth';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/user', auth('user-get'), getAll);
router.get('/user/:id', auth('user-get'), getSingle);

export default router;
