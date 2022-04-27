import User from "../models/user.js";
const login = (req,res,next) =>{
    let message = req.session.err || "";
    let user = req.session.user || "";
    req.session.err = "";
    res.render('login-user',{message,user})
}

const logout = (req,res,next) =>{
    req.session.destroy();
    res.redirect('/login');
}

const auth = (req,res,next) =>{
    const data ={
        username : req.body.name,
        password : req.body.password
    }
    User.findOne({where :{username : data.username}}).then(result =>{
        if(!result){
            req.session.err = "Incorrect username or password";
            res.redirect('/login')
        }else if(data.password != result.password){
            req.session.err = "Incorrect password";
            res.redirect('/login')
        }else{
            req.session.user = result;
            res.redirect('/user')
        }
    }).catch(err =>{
        req.session.err = "Error query database";
        res.redirect('/login');
    })
}

export default {login,logout,auth}