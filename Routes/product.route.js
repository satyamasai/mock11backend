const { Router } = require("express");


const { productModel } = require("../Models/product.model");

const productController = Router();


// ------getting all products from database------

productController.get("/products",async (req,res)=>{

     const {user_id} = req.body;
     
     const allproducts = await productModel.find({user_id})  

     res.send({allproducts})

})


// -----post products-----//
 
productController.post("/addproduct",async (req,res)=>{
        const payload = new productModel({
            ...req.body
        })
      await payload.save()
      console.log(payload)
      res.send({msg:"product added..."})
})


// deletee
productController.post("/delete",async (req,res)=>{
    const payload = new productModel({
        ...req.body
    })
  await payload.save()
  console.log(payload)
  res.send({msg:"product added..."})
})





module.exports={
    productController
}