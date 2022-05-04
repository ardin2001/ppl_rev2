import express from 'express';
import mc from '../controllers/user.js';
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('index.ejs');
})
export default router;