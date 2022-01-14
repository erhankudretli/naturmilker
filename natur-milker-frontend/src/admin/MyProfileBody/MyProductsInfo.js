import { Container, Row, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AiFillDelete } from 'react-icons/ai'
import { GrUpdate } from 'react-icons/gr'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'


const MyProductsInfo = (props) => {

  const { getAccessTokenSilently } = useAuth0()

  const [token, setToken] = useState()

  getAccessTokenSilently().then((token) => setToken(token))

  const deleteProduct = (productId) => {

    fetch(`http://localhost:3005/products/${productId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <Container className="product-table">
      <Row>
        <Table  striped bordered hover>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Explanation
              </th>
              <th>
                ProductId
              </th>
              <th>
                Product Type
              </th>
              <th>
                Price
              </th>
              <th>
                Canton
              </th>
              <th>
                Address
              </th>
              <th>
                Update Product
              </th>
              <th>
                Delete Product
              </th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product) => <tr key={props.ProductId}>

              <td>
                {product.Name}
              </td>
              <td>
                {product.Explanation}
              </td>
              <td>
                {product.ProductId}
              </td>
              <td>
                {product.ProductType}
              </td>
              <td>
                {product.Price}
              </td>
              <td>
                {product.Canton}
              </td>
              <td>
                {product.Address}
              </td>
              <td className='d-flex justify-content-center '>
                <Link to={`/update-product-info/${product.ProductId}`}>
                  <GrUpdate size={30} />
                </Link>
              </td>
              <td>
                <AiFillDelete size={30} onClick={() => deleteProduct(product.ProductId)} />
              </td>
            </tr>
            )}

          </tbody>
        </Table>
      </Row>
      <Row>
        <Link to={`/create-product/${props.producerId}`}>
          <Button className='btn-button' variant='success'>
            Create New Product
          </Button>
        </Link>
      </Row>
    </Container>
  )
}

export default MyProductsInfo
