import * as productRepository from '../persistency/ProductRepository.js'

export async function getAllProducts(){
    return await productRepository.getAll();
}

export async function getNineProducts(){
    return await productRepository.getNine();
}

export async function getEightProducts(){
    return await productRepository.getEight();
}

export async function createProduct(Pproduct){
    return await productRepository.create(Pproduct);
}

export async function deleteProduct(pId){
    return await productRepository.remove(pId);
}

export async function getProductById(pId){
    let product = await productRepository.findById(pId);
    return product;
}

 export async function updateProduct(pId, pUpdateProduct){
    let product = await productRepository.update(pId, pUpdateProduct);
    return product;
}

export async function getProductsByProducerId(producerId){
    let products = await productRepository.getAllProducts(producerId);
    return products;
}

export async function getSelectedProduct(canton, productType ){
    let products = await productRepository.findByCantonAndType(canton , productType );
    return products;
}