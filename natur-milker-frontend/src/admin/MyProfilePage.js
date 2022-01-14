import { Col, Row, Container } from 'react-bootstrap'
import MyProfileHeader from './MyProfileHeader'
import MyProfileBody from './MyProfileBody/MyProfileBody'
import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import * as producerElement from '../services/producer'

const MyProfilePage = () => {

const [producerInfo, setProducerInfo] = useState({})
const [products, setProducts] = useState([]);
const [refreshPage, setRefreshPage] = useState(false)


const { user } = useAuth0()
const producerId= user.sub
const firstName = user.given_name
const lastName = user.family_name
const email = user.email

useEffect(() => {
  
  async function showProducts() {
    const products = await producerElement.getAllProducts(producerId);
    if (products) {
      return setProducts(products);
    }
  }

  async function controlProducer () {
    const producer = await producerElement.getProducerbyId(producerId);
    
    if (producer.ProducerId){
     return setProducerInfo(producer)
   }else {
       const newProducer = {
       ProducerId : producerId,
       FirstName : firstName,
       LastName : lastName,
       Mail : email,

      }
      return fetch('http://localhost:3005/producer', {
         method: 'POST',
         body: JSON.stringify(newProducer),
         headers: { 'Content-Type': 'application/json' },
       }).then(()=>  producerElement.getProducerbyId(producerId)).then(()=>setRefreshPage(true))

   }
  }
  
        controlProducer()
        showProducts()

        },[producerId,firstName,lastName,email,refreshPage ]);


  return (

    <Container>
      <Row>
        <Col>
        <MyProfileHeader producerInfo={producerInfo} />
        </Col>
      </Row>
      <Row>
        <Col>
        <MyProfileBody producerInfo={producerInfo} products={products} />
        </Col>
      </Row>
    </Container>
  )
}
export default MyProfilePage
