import express from 'express';
const router = express.Router();

import { createRole, getAllRoles } from '../controllers/roleControllers.js'
import auth  from '../middlewares/auth.js';


router.post('/', auth('no scope needed'), createRole);
router.get('/', auth('role-get'), getAllRoles);

export default router;
