import User from "../models/user.js";
const read = (req,res) =>{
    User.findOne({where:{id_user : req.params.id}}).then((result) =>{
        res.render('user/profile',{User:result, user : req.session.user || ""})
    })
}
const update = (req,res) =>{
    User.findOne({where:{id_user:req.params.id}}).then(result =>{
        res.render('user/profile_update',{User:result,user : req.session.user || ""})
    })
}

export default {read,update}