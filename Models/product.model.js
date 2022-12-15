const mongoose= require("mongoose");

const productSchema = mongoose.Schema({
      title:{type:String , required:true},
      quantity:{type:Number, requuired:true},
      priority:{type:Boolean , default:true},
      description:{type:String, required:true},
    

},{ timestamps: true } )

const productModel = mongoose.model("product" , productSchema);

module.exports={
    productModel
}