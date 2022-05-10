import Admin from "../models/admin.js"
const read = (req,res) =>{
    Admin.findOne({where:{id_admin : req.params.id}}).then((result) =>{
        res.render('admin/profile',{Admin:result, admin : req.session.admin || ""})
    })
}
const update = (req,res) =>{
    Admin.findOne({where:{id_admin:req.params.id}}).then(result =>{
        res.render('admin/profile_update',{Admin:result,admin : req.session.admin || ""})
    })
}

export default {read,update}