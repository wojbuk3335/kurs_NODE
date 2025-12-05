const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {validateEmail} = require('./validators.js')

const userSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required: [true, "Email jest wymagany"],
        lowercase:true,
        trim:true,
        unique:[true, "Ten adres email jest już w użyciu"],
        validate:[validateEmail, "Enail nieprawidłowy"]
    },
    phone: {
        type: String,
        trim: true,
        validate: {
            validator: function(v) {
                // Polski numer: 9 cyfr lub +48 i 9 cyfr
                return /^(\+48)?[\s-]?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/.test(v);
            },
            message: 'Nieprawidłowy numer telefonu'
        }
    },
    password:{
        type: String,
        required: true,
        minLength:[4, "Hasło powinno posiadać minimum 4 znaki "]
    },
    company:{
        type:String,
        required:false,
    },
    position:{
        type:String,
        required:false,
    },
    interests: {
    type: [String],  // tablica stringów
    default: []
    },
    terms: {
        type:String,
        required:true
    },
    newsletter:{
        type:String,
        required:false
    }
})


userSchema.pre('save', async function() {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
});

const User=mongoose.model ('User',userSchema)


module.exports=User;