import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">Natacha life</a>
      </header>
      <main>
        <h1>Liste des Produits :</h1>
        <div className="products">
          {data.product.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  Prix : <strong>{product.price} € </strong>
                </p>
                <button>Ajouter au panier</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
