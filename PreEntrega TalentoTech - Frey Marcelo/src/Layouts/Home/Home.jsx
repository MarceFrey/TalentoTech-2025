import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = ({ productos, addToCart, error, loading }) => {
  return (
    <div>
      <Header />
      {loading && <p>Cargando productos...</p>}
      {error && <p>{error}</p>}
      <ProductCard productos={productos} addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default Home;
