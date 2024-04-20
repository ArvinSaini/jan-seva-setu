import express from 'express';
const app=express();

app.use(express.json());
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});

const db_link='';
mongoose.connect(db_link)
.then(function(db){
    console.log('db connected');
})
.catch(function(err)
{
    console.log(err);
});

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:8
    }
});

const userModel=mongoose.model('userModel',userSchema);

const ngoSchema = new mongoose.Schema({
    ngoName :{
        type: String,
        required: true,
        unique:true,
    },
    ngoAddress :{
        type: Object,
        required: true,
    },
    ngoPhone :{
        type: Number,
        required: true,
        unique: true,
    },
    ngoCategory :[String],
    ngoDescription :{
        type: String, 
        required: true,
    }
});

const ngoModel=mongoose.model('ngoModel',ngoSchema);

const donateSchema = new mongoose.Schema({
    donateName:{
        type: String,
        required: true,
        unique:true,
    },
    donatePhone:{
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return v.length >= 10;
            },
    },
    donateDate:{
        type: Date,
        default: Date.now,
    },
    donateItem:{
        type: [String],
    },
    donatePickupAddress:{
        type: Object,
        required: true,
    },
    donateQuantity:{
        type: Number,
        required: true,
    },
    donateDescription:{
        type: String,
    },
    donateTimeofPickup:{
        type: Date,
        required: true,
    }
}});

const donateModel=mongoose.model('donateModel',donateSchema);