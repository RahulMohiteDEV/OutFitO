import mongoose from "mongoose";

const priceSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
    },
    currency:{
        type:String,
        enum:["USD","INR","EUR","GBP","JPY","AUD","CAD","CHF","CNY","SEK","NZD"],
        default:"INR"
    }   
},{
    _id:false,
    _v:false    
});

export default priceSchema;