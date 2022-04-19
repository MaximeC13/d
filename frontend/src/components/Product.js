import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

function Product(props) {
  const { product } = props;
  const newProduct = String(product.name).length;
  return (
    <Card>
      <Link to={`product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`product/${product.slug}`}>
          {newProduct >= 30 ? (
            <Card.Title>{product.name}</Card.Title>
          ) : (
            <Card.Title>
              {product.name}
              <br />
              <br />
            </Card.Title>
          )}
        </Link>
        <Rating rating={product.rating} numReviews={product.numReview} />
        <Card.Text>{product.price} €</Card.Text>
        <div className="text-center">
          <Link to={`product/${product.slug}`}>
            <Button className="text-center">Voir l'article</Button>
          </Link>
        </div>{' '}
      </Card.Body>
    </Card>
  );
}

export default Product;
