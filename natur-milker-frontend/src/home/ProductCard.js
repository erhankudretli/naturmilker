import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// SILINECEK

const ProductCard = (props) => {
  return (
    <Card className="SearchedAreaAdvicedProducts mb-5" key={props.index}>
      <Link to={`/product-detail/${props.product.ProductId}`}>
        <Card.Img
          variant="top"
          src="https://vanguardrenewables.com/wp-content/uploads/2020/09/RainbowFarm-1024x726.jpg"
        />
      </Link>
      <Card.Body>
        <Card.Title>
          {props.product.Name}
          <br></br>
          Product Type:
          {props.product.ProductType}
        </Card.Title>
        <Card.Text>
          <small className="text-muted">{props.product.Explanation}</small>
          <br></br>
          Canton:
          {props.product.Canton}
          <br></br>
          Address:
          {props.product.Address}
        </Card.Text>
      </Card.Body>

      <Card.Footer>
        Price:
        {props.product.Price} CH
      </Card.Footer>

    </Card>
  );
};

export default ProductCard;
