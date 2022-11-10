import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app= express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


const mongoUrl= "mongodb+srv://devanshsks:gs73JPs3PNaZ3OPR@cluster0.kdvizz6.mongodb.net/?retryWrites=true&w=majority"

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
    password:String,
    playlistarr:Array
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
app.post("/updateplaylist", async (req, res) => {
    const { email, playlistarr }= req.body
    const filter = {email: email};

    // const update = {playlistarr: playlistarr};
    const opts = { new: true };
    let doc = await User.findOneAndUpdate(filter, {
        $set: {
            playlistarr: playlistarr
        }
    } , opts);
    User.findOne({email: email}, (err,user) => {
        res.send({user})
    })
})
app.post("/register", (req, res) => {
    const {name, email, password}= req.body
    const playlistarr = [];
    User.findOne({email: email}, (err, user)=>{
        if(user){
            res.send({message: "User Already Registered"})
        }
        else{
            const user= new User({
                name,
                email,
                password,
                playlistarr
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