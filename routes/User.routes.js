const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { UserModel } = require("../model/User.model")
const userRouter = express.Router()

userRouter.post("/register" , async(req,res)=>{
    const {name , email, pass} = req.body;

    try {
        bcrypt.hash(pass , 5 , async(err,hash)=>{
            if(hash){
                const user = new UserModel({name , email , pass:hash})
                await user.save()
                res.status(200).send({"msg" : "Account Created"})
            }else{
                res.status(501).send({"error" : "failed to create user"})
            }
            
        })
    } catch (err) {
        res.status(404).send({err : err.message})
    }
})


userRouter.post("/login" , async(req,res)=>{
    const {email , pass} = req.body

    try {
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(pass , user.pass , (err , result)=>{
                if(result){
                    const token = jwt.sign({authorID: user._id} , "play" ,{expiresIn : '1h'})
                    res.status(200).send({msg: "Login Succesfull" , token:token})
                }else{
                    res.status(200).send({msg : "Wrong Credentials"})
                }
            })
        }else{
            res.status(200).send({msg : "Wrong Credentials"})
        }

    } catch (err) {
        res.status(400).send({err: err.message})
    }
})

module.exports={
    userRouter
}
