//check a product and get
export async function getProducerbyId(producerId) {
    try {
      const producerData = await fetch(`http://localhost:3005/producer/${producerId}`);
      return await producerData.json();
    } catch (err) {
      console.log("error", err);
    }
  }
  
//get all products by producer id
export async function getAllProducts(producerId) {
  try {
    const productsData = await fetch(`http://localhost:3005/products/producer/${producerId}` );
    return await productsData.json(); 
  } catch (err) {
    console.log("error", err);
  }
}


