import express from 'express';
import mc from '../controllers/user.js';
const router = express.Router();

//auth-session
router.get('/', mc.login);
router.get('/logout', mc.logout);
router.post('/login', mc.auth);

export default router;