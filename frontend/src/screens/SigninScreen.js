import Button from 'react-bootstrap/esm/Button';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default function SigninScreen() {
  const { search } = useLocation();
  const redirecIntUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirecIntUrl ? redirecIntUrl : '/';
  return (
    <Container clasName="small-container">
      <Helmet>
        <title>Inscription</title>
      </Helmet>
      <h1 clasName="mb-3">Inscription </h1>
      <Form.Group clasName="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" required />
      </Form.Group>
      <Form.Group clasName="mb-3" controlId="password">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" required />
      </Form.Group>
      <div className="mb-3">
        <Button type="submit">Inscription</Button>
      </div>
      <div className="mb-3">
        Nouveau client ?{''}
        <Link to={`/signup?redirect=${redirect}`}>Créer votre compte</Link>
      </div>
    </Container>
  );
}
