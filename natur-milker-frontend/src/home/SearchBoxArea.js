import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchBoxArea = () => {
  const [cantonName, setCantonName] = useState(["-"]);
  const [productType, setProductType] = useState(["-"]);

  return (
    <Container>
      <h2 className="mb-5" id="searchboxtext">
        Find Your Natural Products
      </h2>
      <Row className="justify-content-md-center">
        <Col lg="3">
          <Form.Group>
            <Form.Control
              as="select"
              size="lg"
              onChange={(e) => setCantonName(e.target.value)}
            >
              <option className="option" selected>
                Cantons
              </option>
              <option className="option">Zürich</option>
              <option className="option">Bern</option>
              <option className="option">Luzern</option>
              <option className="option">Obwalden</option>
              <option className="option">Nidwalden</option>
              <option className="option">Uri</option>
              <option className="option">Glarus</option>
              <option className="option">Zug</option>{" "}
              <option className="option">Freiburg</option>
              <option className="option">Solothurn</option>
              <option className="option">Basel-Stadt</option>
              <option className="option">Basel-Landschaft</option>
              <option className="option">Schaffhausen</option>
              <option className="option">Appenzell-Ausserrhoden</option>
              <option className="option">Appenzell-Innerrhoden</option>
              <option className="option">St-Gallen</option>
              <option className="option">Graubünden</option>
              <option className="option">Aargau</option>
              <option className="option">Thurgau</option>
              <option className="option">Ticino</option>{" "}
              <option className="option">Vaud</option>
              <option className="option">Wallis</option>
              <option className="option">Neuchatel</option>
              <option className="option">Geneve</option>
              <option className="option">Jura</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col lg="3" md="auto">
          <Form.Group>
            <Form.Control
              as="select"
              size="lg"
              onChange={(e) => setProductType(e.target.value)}
            >
              <option className="option" selected>
                Products
              </option>
              <option>Milk</option>
              <option>Vegatables</option>
              <option>Fruits</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs lg="1">
          <Link to={`/product-search/${cantonName}/productType/${productType}`}>
            <Button
              variant="outline-secondary"
              className="button-search"
              size="lg"
              type="submit"
            >
              Search
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBoxArea;
