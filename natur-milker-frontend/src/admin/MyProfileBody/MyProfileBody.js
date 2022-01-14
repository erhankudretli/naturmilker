import { Container, Tab, Nav, Row, Col } from 'react-bootstrap'
import MyProfileInfo from './MyProfileInfo'
import MyProuductsInfo from './MyProductsInfo'

const MyProfilePageBody = (props) => {

  return (
    <Container className='profile-body-container container-fluid'>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col className="my-profil-menubar" sm={3}>
          <Nav variant='pills' className='flex-column'>
            <Nav.Item>
              <Nav.Link eventKey='first'>
                My Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='second'>
                My Product
              </Nav.Link>
            </Nav.Item>
          </Nav>
          </Col>
          <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey='first'>
              <MyProfileInfo producer={props.producerInfo} />
            </Tab.Pane>
            <Tab.Pane eventKey='second'>
              <MyProuductsInfo producerId={props.producerInfo.ProducerId} products={props.products} />
            </Tab.Pane>
          </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default MyProfilePageBody
