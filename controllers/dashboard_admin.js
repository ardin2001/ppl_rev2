const read = (req,res) =>{
    res.render('admin/dashboard',{user : req.session.user || ""})
}
export default {read}