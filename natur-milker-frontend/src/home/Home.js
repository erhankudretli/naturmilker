import { Container, Row, Col } from 'react-bootstrap'
import SearchBoxArea from './SearchBoxArea'
import AdvicedProductsArea from './ProductList'

const HomePage = (props) => {
  return (

    <Container>
      {/* or fluid*/}
      <Row className='searchBoxAreaMain'>
        <Col>
        <SearchBoxArea />
        </Col>
      </Row>
      <Row className='advicedProductsArea'>
        <Col>
        <AdvicedProductsArea product={props.product} />
        </Col>
      </Row>
    </Container>

  )
}

export default HomePage
