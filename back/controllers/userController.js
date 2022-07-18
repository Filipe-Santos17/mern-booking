const {User} = require("../db/models/userModel")
const JWT = require("jsonwebtoken")

module.exports = {
      async registerUser(req,res){
        console.log(req.body);

        const{name,email,password}=req.body;
        
        // validation
        if(!name){
            return res.status(400).send("Name is required");
        }
        
        if(!password || password.length < 6){
          return res.status(400).send("Password is required and should be min 6 characters long");
        }

        let userExist = await User.findOne({email}).exec()

        if( userExist){
            return res.status(400).send('Email is taken')
        }

        // register
        const user = new User(req.body)
        
        try {
            await user.save()
            console.log("User Created", user)
            return res.json({ok: true})
        } catch(err){
            console.log('CREATE USER FAILED',err)
            return res.status(400).send('Error.Try again.')
        }
    },

    async loginUser(req,res){
        console.log(req.body)

        const {email, password} = req.body

        try{
            let user = await User.findOne({email})

            if(!user){
                res.status(400).send("User with email not found")
            }

            //compare password
            user.comparePassword(password, (err,match) => {
                if(!match|| err) {
                    res.status(400).send("Password Incorret")
                }
                //Generate a token the send to client
                let token = JWT.sign({_id: user._id}, process.env.JWT_SECRET,{
                    expiresIn:'7d', //7 days, or 1w = 1week
                })
                res.json({token,user:{
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                }}) //send token and user data 
            })
        } catch(error){
            console.log("LOGIN ERROR", error)
            res.status(400).send("Signin failed")
        }
    }
}