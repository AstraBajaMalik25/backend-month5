import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller';
import { login, devLogin, register } from '../controllers/auth.controller'


const router = Router();

router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/login', login)
router.post('/dev-login', devLogin);
router.post('/register', register);
export default router;