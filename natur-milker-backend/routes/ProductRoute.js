import express from 'express';
var router = express.Router();
import * as service from '../services/ProductService.js'
import checkJwt from '../authz/check-jwt.js'

/* GET all products listing. */
router.get('/', async function(req, res, next) {
  const allProducts = await service.getAllProducts();
  res.send(allProducts);
});


/* GET 9 products listing. */
router.get('/homepage', async function(req, res, next) {
  const nineProducts = await service.getNineProducts();
  res.send(nineProducts);
});

/* GET 8 products listing. */
router.get('/productdetails', async function(req, res, next) {
  const eightProducts = await service.getEightProducts();
  res.send(eightProducts);
});

/** GET a product by id */
router.get('/:id', async function(req, res, next) {
  let productId = req.params.id;
  const product = await service.getProductById(productId)
  res.send(product);
});


/** Add a new product */
router.post('/', checkJwt, async function(req, res, next) {
  const newProduct = req.body; 
  const createdProduct = await service.createProduct(newProduct);
  res.status(201).send(createdProduct);
});

/** delete a product by id */
router.delete('/:id', checkJwt,async function(req, res, next) {
  let productId = req.params.id;
  await service.deleteProduct(productId);
  res.status(200).send({});
});

/** GET all products of a producer by producerID */
router.get('/producer/:id', async function(req, res, next) {
  let producerId = req.params.id;
  const products = await service.getProductsByProducerId(producerId)
   res.send(products);
});



/** update a product by id */
router.put('/:id',checkJwt, async function(req, res, next) {
  let productId = req.params.id;
  let productToBeUpdated = req.body;
  let updatedproduct = await service.updateProduct(productId, productToBeUpdated);
  res.status(200).send(updatedproduct);
});


/** GET selected product by canton name and product type*/
router.get('/search/canton/:cantonId/productType/:productTypeId', async function(req, res, next) {
  let canton = req.params.cantonId;
  let productType = req.params.productTypeId;
   const product = await service.getSelectedProduct(canton, productType )
   res.send(product);
});

export default router;

