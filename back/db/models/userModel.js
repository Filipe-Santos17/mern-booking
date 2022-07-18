const Joi = require("joi");
const bycrpt = require("bcrypt")
const mongodb = require("mongoose")

const UserSchema = new mongodb.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 64,
    }  
}, 
{timestamp: true}
)

UserSchema.pre("save", function(next){
    let user = this

    if(user.isModified('password')){
        return bycrpt.hash(user.password, 12, function(err,hash){ //12 = salt
            if(err){
                console.log(`BYCRPT HASH ERR: ${err}`)
                return next(err)
            }
            user.password = hash 
            return next()
        });            
    } else {
        return next()
    }
})


const validate = (user) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required().min(6).max(64),
	});
	return schema.validate(user);
};

UserSchema.methods.comparePassword = function(password,next){
    bycrpt.compare(password, this.password, function(err,match){
        if(err){
            console.log("COMPARE PASSWORD ERR", err)
            return next(err,false)
        }

        //if no error
        console.log("MATCH PASSWORD", match)
        return next(null,match)
    })
}

const User = mongodb.model("User", UserSchema)

module.exports = {User, validate}