import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app= express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


const mongoUrl= "mongodb+srv://devyanshu:20205065@cluster0.fcnbita.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
})
.then(() => {
    console.log("Connected to Database");
})
.catch((e) => console.log(e));
// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
//     useNewUrlParser: true,
//     useUnfiedTopology: true
// }, () => {
//     console.log("DB connected")
// })

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = new mongoose.model("User", userSchema)
//Routes
app.post("/login", (req, res) => {
    const { email, password}= req.body
    User.findOne({ email:email}, (err,user) => {
        if(user){
             if(password===user.password){
                res.send({message: "Login Successfull", user:user})
             }
             else{
                res.send({message: "Password didn't match"})
             }
        }
        else{
            res.send({message: "User Not Found"})
        }
    })
})
app.post("/register", (req, res) => {
    const {name, email, password}= req.body
    User.findOne({email: email}, (err, user)=>{
        if(user){
            res.send({message: "User Already Registered"})
        }
        else{
            const user= new User({
                name,
                email,
                password
            })
            //error checking
            user.save(err => {
                if(err){
                    res.send(err)
                }
                else{
                    res.send({ message: "Successfully Registerd, Please login now.!" })
                }
            })
        }
    })
    
})
app.listen(9002, ()=>{
    console.log("BE started at port 9002")
})