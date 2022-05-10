import User from "../models/user.js"
const read = (req,res) =>{
    User.findAll().then((result) =>{
        res.render('admin/user_view',{User:result, admin : req.session.admin || ""})
    })
}

export default {read}