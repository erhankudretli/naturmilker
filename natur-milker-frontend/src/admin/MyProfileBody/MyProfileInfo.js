import { Container, Row, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyProfileInfo = (props) => {
  return (
    <Container>
      <Row>
        <Table
          striped
          bordered
          hover
          size='sm'>
          <thead>
            <tr>
              <th>
                Name Surname
              </th>
              <th>
                {props.producer.FirstName}
                {props.producer.LastName}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                Email
              </th>
              <th>
                {props.producer.Mail}
              </th>
            </tr>
            <tr>
              <th>
                Phone Number
              </th>
              <th>
                {props.producer.PhoneNumber}
              </th>
            </tr>
            <tr>
              <th>
                Company Name
              </th>
              <th>
                {props.producer.CompanyName}
              </th>
            </tr>
            <tr>
              <th>
                Company Adress
              </th>
              <th>
                {props.producer.Address}
              </th>
            </tr>
            <tr>
              <th>
                BioFieldset
              </th>
              <th>
                {props.producer.BioFieldset}
              </th>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Link to={`/update-profile-info/${props.producer.ProducerId}`}>
        <Button className='btn-button' variant='success'>
          Update Your Information
        </Button>
        </Link>
      </Row>
    </Container>

  )
}

export default MyProfileInfo
