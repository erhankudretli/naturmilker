import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdvicedProductsArea = (props) => {
  return (
    <Container>
      <Row>
        {props.product.map((product, index) => <Col sm={4} key={index}>
                                               <Card className='Product-Cards mb-5' key={props.index}>
                                                 <Link to={`/product-detail/${product.ProductId}`}>
                                                 <Card.Img variant='top' src='https://vanguardrenewables.com/wp-content/uploads/2020/09/RainbowFarm-1024x726.jpg' />
                                                 </Link>
                                                 <Card.Body>
                                                   <Card.Title>
                                                     <h4>{product.Name}</h4>
                                                     <br></br>
                                                     Product Type:
                                                     {product.ProductType}
                                                   </Card.Title>
                                                   <Card.Text>
                                                     Canton:
                                                     {product.Canton}
                                                     <br></br>
                                                     Address:
                                                     {product.Address}
                                                   </Card.Text>
                                                 </Card.Body>
                                                 <Card.Footer>
                                                  <small className='text-muted'>{product.Explanation}</small>
                                                  <br></br>
                                                   Price:
                                                   {product.Price} CHF
                                                 </Card.Footer>
                                               </Card>
                                               </Col>
         )}

      </Row>
    </Container>
  );
};

export default AdvicedProductsArea;
