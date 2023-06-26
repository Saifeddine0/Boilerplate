import mongoose from "mongoose"
const reviewSchema = mongoose.Schema({
    name:{Type:String },
    rating:{Type:Number },
    Comment:{Type:String},
    user:{
        type : mongoose.Schema.Types.ObjectId,
        
       
        ref :'User'
    },   
},{
    timestamps:true
})

const productSchema = mongoose.Schema(
    {
    user:{
        type : mongoose.Schema.Types.ObjectId,
        
       
        ref :'User'
    },   
    name:{
        type : String,
        
        
    },
    image:{
        type : String,
       
       
        
    },
    brand:{
        type : String,
       
      
    },
    description:{
         
        type : String,
        
        
        
    },
    review :[reviewSchema],
    rating:{
         
        type : Number,
        
        
        default:0
        
    },
    numReviews:{
         
        type : Number,
        
        
        default:0
        
    },
    price:{
         
        type : Number,
        
        
        default:0
        
    },
    countInStock:{
         
        type : Number,
       
       
        default:0
        
    }
},{
    timestamps:true
})
const Product  = mongoose.model('Product',productSchema)
export default Product