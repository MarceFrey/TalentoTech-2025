import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';

const Home = ({ productos, addToCart, error, loading }) => {
  return (
    <div className='home-background'>
      <Header />
      <div className='home-content'>
        {loading && <p>Cargando productos...</p>}
        {error && <p>{error}</p>}
        <ProductCard productos={productos} addToCart={addToCart} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
