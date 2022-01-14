import {Container,Row,Col} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
 
  return (
    <Container fluid >
      <footer>
      <Row>
      <Col>
     
      </Col>
      <Col>
      <span>&copy; Copyright 2021 NaturMilker</span>
      </Col>
      <Col >
      <SocialIcon className="socialIcon" url="https://linkedin.com/in/#" network="linkedin" bgColor="#fff" />
      <SocialIcon  className="socialIcon"url="https://instagram.com/#" network="instagram" bgColor="#fff" />
      <SocialIcon className="socialIcon" url="https://facebook.com/#" network="facebook" bgColor="#fff" />
      </Col>
    </Row>
    </footer>
    </Container>
  )
}

export default Footer
