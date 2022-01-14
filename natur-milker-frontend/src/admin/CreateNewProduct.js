import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAuth0 } from "@auth0/auth0-react";

const CreateNewProduct = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [token, setToken] = useState();

  getAccessTokenSilently().then((token) => setToken(token));

  const { producerId } = useParams();
  const [newProduct, setNewProduct] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <Form className="m-5 d-block w-25" onSubmit={handleSubmit}>
        <h3 className="updatebio-form-header mb-3">Create New Product</h3>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={(e) =>
              setNewProduct({
                ...newProduct,
                Name: e.target.value,
                ProducerId: producerId,
                ProductId: uuidv4(),
              })
            }
            name="Name"
            type="text"
            placeholder="Normal text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(e) =>
              setNewProduct({ ...newProduct, Price: e.target.value })
            }
            type="text"
            name="Price"
            placeholder="Normal text"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Product Type select</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setNewProduct({ ...newProduct, ProductType: e.target.value })
            }
          >
            <option>Milk</option>
            <option>Fruits</option>
            <option>Vegatables</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Canton select</Form.Label>
          <Form.Control
            as="select"
            onChange={(e) =>
              setNewProduct({ ...newProduct, Canton: e.target.value })
            }
          >
            <option>Zürich</option>
            <option>Bern</option>
            <option>Luzern</option>
            <option>Nidwalden</option>
            <option>Obwalden</option>
            <option>Uri</option>
            <option>Glarus</option>
            <option>Zug</option>
            <option>Freiburg</option>
            <option>Solothurn</option>
            <option>Basel-Stadt</option>
            <option>Basel-Landschaft</option>
            <option>Schaffhausen</option>
            <option>Appenzell-Ausserrhoden</option>
            <option>Appenzell-Innerrhoden</option>
            <option>St-Gallen</option>
            <option>Graubünden</option>
            <option>Aargau</option>
            <option>Thurgau</option>
            <option>Ticino</option>
            <option>Vaud</option>
            <option>Wallis</option>
            <option>Neuchatel</option>
            <option>Geneve</option>
            <option>Jura</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setNewProduct({ ...newProduct, Address: e.target.value })
            }
            type="text"
            name="Address"
            placeholder="Normal text"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Explanation</Form.Label>
          <Form.Control
            onChange={(e) =>
              setNewProduct({ ...newProduct, Explanation: e.target.value })
            }
            name="Explanation"
            as="textarea"
            rows={3}
            placeholder="Normal text"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default CreateNewProduct;
