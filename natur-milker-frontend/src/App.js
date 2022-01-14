import HomePage from './home/Home'
import ProductDetail from './home/ProductDetail'
import Header from './layout/Header'
import Footer from './layout/Footer'
import ProductSearchResult from './home/ProductsSearchResults'
import MyProfilePage from './admin/MyProfilePage'
import CreateNewProduct from './admin/CreateNewProduct'
import UpdateProfileInfo from './admin/UpdateProfileInfo'
import UpdateProductInfo from './admin/UpdateProductInfo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Loading from './auth/Loading'


import ProtectedRoute from "./auth/protected-route";


const App =  () => {
 
  const [productsforHomePage, setProductForHomepage] = useState([])
      
  const APP_URL_HOME_PAGE = `http://localhost:3005/products/homepage`
  
  useEffect(() => {
    loadProductDataForHomepage()
  },[])

  const loadProductDataForHomepage = async () => {
    const response = await fetch(APP_URL_HOME_PAGE)
    const data = await response.json()
    setProductForHomepage(data)
  }

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (

<Router>

    <Header/>
      <div>
        <Switch>
          <Route exact path='/'>
            <HomePage  product={productsforHomePage}/>
          </Route>
          <Route path='/product-search/:canton/productType/:type' >
            <ProductSearchResult  />
          </Route>
          <Route path='/product-detail/:productId'  >
            <ProductDetail product={productsforHomePage} />
          </Route>
       
          <Route path='/create-product/:producerId'>
            <CreateNewProduct/>
          </Route>

          <ProtectedRoute path="/my-profile-page" component={MyProfilePage} />
           
          <Route path='/update-profile-info/:ProducerId'>
            <UpdateProfileInfo/>
          </Route>
          <Route path='/update-product-info/:ProductId'>
            <UpdateProductInfo/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
    
    
  )
}

export default App
