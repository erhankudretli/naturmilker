import { Form, Button } from 'react-bootstrap'
import { useState} from 'react'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


const UpdateProfileInfo = () =>{

  const { getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState();

  getAccessTokenSilently().then((token) => setToken(token));


  const { ProducerId }  = useParams()  
  const [updatedProducer, setUpdatedProducer] = useState({
  })
  
  const handleSubmit = async (e) => {
   
    e.preventDefault()
    fetch(`http://localhost:3005/producer/${ProducerId}`, {
      method: 'PUT',
      body: JSON.stringify(updatedProducer),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
  }

    return (
      <div className='d-flex justify-content-center'>
    <Form className='m-5 d-block w-25' onSubmit={handleSubmit}>
      <h3 className='updatebio-form-header mb-3'>Update Your Personel Informations</h3>
    <Form.Group>
      <Form.Label>
        First Name
      </Form.Label>
      <Form.Control
        onChange={e => setUpdatedProducer({...updatedProducer, FirstName: e.target.value})}
        name='FirstName'
        type='text'
        placeholder='FirstName' />
    </Form.Group>
    <Form.Group>
      <Form.Label>
        Last Name
      </Form.Label>
      <Form.Control
        onChange={e => setUpdatedProducer({...updatedProducer, LastName: e.target.value})}
        name='LastName'
        type='text'
        placeholder='LastName' />
    </Form.Group>
    <Form.Group controlId='formBasicEmail'>
          <Form.Label>
            Email Address
          </Form.Label>
          <Form.Control
            onChange={e => setUpdatedProducer({ ...updatedProducer, Mail: e.target.value })}
            name='Mail'
            type='email'
            placeholder='Enter email' />
        </Form.Group>
    <Form.Group>

      <Form.Label>
        Password
      </Form.Label>
      <Form.Control
        onChange={e => setUpdatedProducer({ ...updatedProducer, Password: e.target.value })}
        type='text'
        name='Password'
        placeholder='Password' />
    </Form.Group>
    <Form.Group>
      <Form.Label>
        Phone Number
      </Form.Label>
      <Form.Control
        onChange={e => setUpdatedProducer({ ...updatedProducer, PhoneNumber: e.target.value })}
        type='text'
        name='PhoneNumber'
        placeholder='PhoneNumber' />
    </Form.Group>
    <Form.Group>
      <Form.Label>
       Address
      </Form.Label>
      <Form.Control
        onChange={e => setUpdatedProducer({ ...updatedProducer, Address: e.target.value })}
        type='text'
        name='Address'
        placeholder='Address' />
    </Form.Group>
    <Form.Group>
      <Form.Label>
       Company Name
      </Form.Label>
      <Form.Control
        onChange={e => setUpdatedProducer({ ...updatedProducer, CompanyName: e.target.value })}
        type='text'
        name='CompanyName'
        placeholder='CompanyName' />
    </Form.Group>
    <Form.Group controlId='exampleForm.ControlTextarea1'>
      <Form.Label>
        Bio Fieldset
      </Form.Label>
      <Form.Control
        onChange={e => setUpdatedProducer({ ...updatedProducer,  BioFieldset: e.target.value })}
        name='BioFieldset'
        as='textarea'
        rows={3}
        placeholder='Bio' />
    </Form.Group>
    
    <Button className='btn-button' variant='primary' type='submit'>
      Update
    </Button>
    
  </Form>
  </div>
)
}
export default UpdateProfileInfo