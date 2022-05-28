import rating_user from "../../controllers/rating_user.js";
import express from 'express';
const router = express.Router();

router.get('/:id',rating_user.read);
router.get('/create/:id',rating_user.create);

export default router;