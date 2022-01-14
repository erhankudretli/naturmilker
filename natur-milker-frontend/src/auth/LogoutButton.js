import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button className='homepage-registerbutton' variant='primary' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>

  )
}

export default LogoutButton
