
import { Container, Col, Row, Badge } from 'react-bootstrap'


const MyProfilePageHeader = (props) => {

  return (

    <Container className='MyProfile-header-container m-5' fluid>
      <Row>
        <Col md='auto'>
        <h1><Badge variant='secondary'> {props.producerInfo.FirstName} {props.producerInfo.LastName} </Badge></h1>
        </Col>
      </Row>
    </Container>
  )
}
export default MyProfilePageHeader
