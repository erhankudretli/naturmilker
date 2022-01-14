import { Container, Row, Col, Tabs, Tab, Carousel } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductList from './ProductList'

const DetailedProduct = (props) => {

  const { productId }  = useParams()
  const [product, setProduct] = useState([])

  const APP_URL_HOME_PAGE = `http://localhost:3005/products/${productId}`

  useEffect(() => {
    loadProduct()
  },[productId])

  const loadProduct= async () => {
    const response = await fetch(APP_URL_HOME_PAGE)
    const data = await response.json()
    setProduct(data)
  }
  
  return (
    <>
    <Container className='border shadow  p-3 detailed-product mt-5 mb-5'>
      <Row className='detailed-Product-header ml-5 mb-2'>
        <h3>{product.Name} </h3>
      </Row>
      <Row>
        <Col>
        <Carousel fade>
          <Carousel.Item>
            <img className='d-block w-100' src='https://cam-techsecurity.co.uk/wp-content/uploads/2019/11/farm-security-scaled.jpg' alt='First slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='https://cam-techsecurity.co.uk/wp-content/uploads/2019/11/farm-security-scaled.jpg' alt='Second slide' />
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block w-100' src='https://cam-techsecurity.co.uk/wp-content/uploads/2019/11/farm-security-scaled.jpg' alt='Third slide' />
          </Carousel.Item>
        </Carousel>
        </Col>
        <Col>
        <Tabs defaultActiveKey='description' id='uncontrolled-tab-example'>

        <Tab eventKey='description' title='Description'>
             Name : {product.Name}
            <br></br>
            Product Type : {product.ProductType}
    <br></br>
             Price : {product.Price}
             <br></br>
             <br></br>
             Detail : {product.Explanation}
          </Tab>
          <Tab eventKey='contact' title='Contact'>
              {product.Canton}
          </Tab>
          <Tab eventKey='navigation' title='Navigation'>
               {product.Address}
          </Tab>
        </Tabs>
        </Col>
      </Row>
    </Container>
    <ProductList product={props.product}/>
    </>
  )
}
export default DetailedProduct
