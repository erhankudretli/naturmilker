import db from "../models/SequelizeSetup.js"
import  Op   from "sequelize"

export async function getAll(){
    return await db.products.findAll();
}

export async function getNine(){
  return await db.products.findAll({limit:9});
}

export async function getEight(){
  return await db.products.findAll({limit:8});
}

export async function create(pproduct){
    return await db.products.create(pproduct);
}

export async function findById(pId){
  return await db.products.findByPk(pId);
}

export async function remove(pId){
  return await db.products.destroy({
    where: { ProductId: pId }
  })
}

export async function update(pId, pUpdatedProduct){
  return await db.products.update(pUpdatedProduct, {
    where: { ProductId: pId }
  });
}

export async function getAllProducts(producerId){
  return await db.products.findAll({
     where: { ProducerId: producerId }
  });
}




export async function findByCantonAndType(canton , productType){
  return await db.products.findAll({
    // where: { 
    //   Canton:  canton ,
    //   ProductType: productType      // bu method ile -and operatoru- calisiyor
    //   }
    
    where: {
      [Op.Op.or]: [
        { Canton: canton },
        { ProductType: productType }   // bu method ile -or operatoru- calisiyor
      ]
    }
}) }