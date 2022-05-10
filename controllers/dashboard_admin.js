const read = (req,res) =>{
    res.render('admin/dashboard',{admin : req.session.admin || ""})
}
export default {read}