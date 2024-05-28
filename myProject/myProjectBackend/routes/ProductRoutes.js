const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController');

router.get("/getAllProducts", productController.getAllProducts)
router.get("/getProducts", productController.getProducts)
router.post("/", productController.addProduct)
//router.get("/",productController.getProductByName)

module.exports = router