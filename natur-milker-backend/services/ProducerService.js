import * as producerRepository from '../persistency/ProducerRepository.js'

export async function getAllProducer(){
    return await producerRepository.getAll();
}

export async function getProducerById(pId){
    let producer = await producerRepository.findById(pId)
    return producer;
}

export async function createProducer(Pproducer){
    return await producerRepository.create(Pproducer);
}

export async function updateProducer(pId, pUpdateProducer){
    let producer = await producerRepository.update(pId, pUpdateProducer);
    return producer;
}
 
export async function deleteProducer(pId){
    return await producerRepository.remove(pId);
}


