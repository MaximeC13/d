import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import { useContext } from 'react';
import { Store } from '../Store';
import axios from 'axios';

function Product(props) {
  const { product } = props;
  const newProduct = String(product.name).length;
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);

    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };
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
          {product.countInStock === 0 ? (
            <Button variant="light" disabled>
              Indisponible
            </Button>
          ) : (
            <Button
              onClick={() => addToCartHandler(product)}
              className="text-center"
            >
              Ajouter au panier
            </Button>
          )}
        </div>{' '}
      </Card.Body>
    </Card>
  );
}

export default Product;
