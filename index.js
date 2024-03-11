import mongoose from "mongoose"
import express from "express"
import connectDB from "./data.js"
import {Product,ProductCategory,ProductInventor, Discount} from "./schema.js"

const app = express()

const port = 5000

 Product();
 ProductCategory();
    ProductInventor();
    Discount();
      connectDB();

app.use(express.json())

app.post("/post",async(req,res) => {
    console.log("inside port");

    const data= new Product({
        name : req.body.name,
        discount_id:req.body.discount_id,
        price: req.body.price,
        category_id:req.body.category_id,
        SKU:req.body.SKU,
        desc:req.body.desc,

    })
    const val= await data.save();
    res.json(val);
})

    app.post("/post",async(req,res) => {
        console.log("inside port");

    const inventor = new roductInventor({
        quality:req.body.quality,
  created_at:req.body.created.at,
  modified_at:req.body.modified_at,
  deleted_at:req.body.deleted_at,
    })

    const val1= await inventor.save();
    res.json(val1);
})
app.post("/post",async(req,res) => {
    console.log("inside port");

    const service = new  ProductInventor({
  quality: req.body.quality,
  created_at:req.body.created_at,
  modified_at:req.body.modified_at,
    
    })
  const val2 = await service.save();
  res.json(val2);
})
app.post("/post",async(req,res) => {
    console.log("inside port");

    const count = new Discount({
        name:req.body.name,
  desc: req.body.desc,
  discount_percent:req.body.discount_percent,
  active:req.body.active,
  created_at: req.body.created_at,
  modified_at:req.body.modified_at,
    })

    const val3 = await count.save();
    res.json(val3);
})

app.listen(port, () => {
    connectDB()
    .catch((error) => {
        console.log("server is runing , but port not connect");
        console.log((error));
    });
    console.log("server is runing");
})