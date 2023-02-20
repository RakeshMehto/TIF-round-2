import express from 'express';
import { getAll, getSingle, signin, signup} from '../controllers/userController.js'
import auth  from '../middlewares/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/', auth('user-get'), getAll);
router.get('/:id', auth('user-get'), getSingle);

export default router;
