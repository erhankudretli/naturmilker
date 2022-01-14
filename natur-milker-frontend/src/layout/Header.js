import { Container, Row, Col, Image } from 'react-bootstrap'
import NavBar from '../auth/nav-bar'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {

  const {isAuthenticated} = useAuth0()
  const { loginWithRedirect } = useAuth0()

  return (
    <Container className='home-page-header-container' fluid>
      <Row>
        <Col md={3}>
        <Link to='/'>
        <Image src='images/Natur Milker Logo.png' rounded className='logo' />
        </Link>
        </Col>
        <Col className="home-page-menu" md={2}>
        <Link className="home-page-links" to='/'>
          Home
        </Link>
        </Col>
        <Col className="home-page-menu" md={2}>
        <Link className="home-page-links" to='/'>
          About
        </Link>
        </Col>
        <Col className="home-page-menu"  md={2} >
       {isAuthenticated ? 
        <Link  className="home-page-links" to='my-profile-page'> My Account
          </Link> 
        : <Link  className="home-page-links" onClick={() => loginWithRedirect()}  >  My Account Login
        </Link> }
        </Col>
        <Col className="home-page-menu-navbar"md={3} > 
        <NavBar/>
        </Col>
        
      </Row>
    </Container>
  )
}

export default Header
