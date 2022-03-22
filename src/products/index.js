import express from "express"
import Product from "./model.js"
const productsRouter = express.Router()

productsRouter
  .get("/", async (req, res) => {
    try {
      const products = await Product.find({})
      res.status(200).send(products)
    } catch (error) {
      console.log(error)
    }
  })
  .get("/:id", async (req, res) => {
    try {
      const products = await Product.find({})
      res.status(200).send(products)
    } catch (error) {
      console.log(error)
      res.status(404).send({ message: "Not Found!" })
    }
  })
  .post("/", async (req, res) => {
    try {
      const product = new Product(req.body)
      await product.save()
      res.status(201).send(product)
    } catch (error) {
      res.status(400).send(error)
    }
  })

export default productsRouter
