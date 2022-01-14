// get selected products
export async function getSelectedProducts(cantonName , productType) {
    try {
      const productsData = await fetch(`http://localhost:3005/products/search/canton/${cantonName}/productType/${productType}` );
      return await productsData.json();

    } catch (err) {
      console.log("error", err);
    }

  }