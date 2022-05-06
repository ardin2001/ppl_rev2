import Admin from "../models/admin.js"
const read = (req,res) =>{
    Admin.findOne({where:{id_admin : req.params.id}}).then((result) =>{
        res.render('admin/profile',{Admin:result, user : req.session.user || ""})
    })
}
const update = (req,res) =>{
    Admin.findOne({where:{id_admin:req.params.id}}).then(result =>{
        res.render('admin/profile_update',{Admin:result,user : req.session.user || ""})
    })
}

export default {read,update}