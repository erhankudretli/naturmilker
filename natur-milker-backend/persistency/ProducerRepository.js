import db from "../models/SequelizeSetup.js"

export async function getAll(){
  return await db.producer.findAll();
}

export async function findById(pId){
    return await db.producer.findByPk(pId);
  }

export async function create(pproduct){
    return await db.producer.create(pproduct);
}

export async function update(pId, pUpdatedProducer){
  return await db.producer.update(pUpdatedProducer, {
    where: { ProducerId: pId }
  });
}

export async function remove(pId){
  return await db.producer.destroy({
    where: { ProducerId: pId }
  })
}



