import { Container, Row, Col } from "react-bootstrap";
import SearchBoxArea from "./SearchBoxArea";
import ProductCard from "./ProductCard";
import * as productElement from "../services/product";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductSearchResults = () => {
  const { canton } = useParams();
  const { type } = useParams();

  const [selectedProducts, setSelectedProducts] = useState([]);

  async function showSelectedProducts(canton, type) {
    const products = await productElement.getSelectedProducts(canton, type);
    setSelectedProducts(products);
  }
  useEffect(() => {
    showSelectedProducts(canton, type);
  }, [canton, type]);

  return (
    <Container>
      {/* or fluid*/}
      <Row className="searchBoxAreaMain">
        <Col>
          <SearchBoxArea />
        </Col>
      </Row>
      <Row className="searchedProductsArea">
        <Col>
          <Container>
            <Row className="border border-success h-100">
              <h3>Here your search Results</h3>
            </Row>
            <Row>
              {selectedProducts.map((product, index) => (
                <Col sm={3} key={index}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSearchResults;
