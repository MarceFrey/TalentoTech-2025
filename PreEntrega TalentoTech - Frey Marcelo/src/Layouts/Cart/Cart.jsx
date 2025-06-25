import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrrito from '../../components/Carrito/Carrito'
import './Cart.css';

const Cart = ({ carrito, removeCart }) => {
  return (
    <div className='cart-background'>
      <Header />
      <div className='cart-content'>
        <Carrrito cart={carrito} removeCart={removeCart} />
      </div>
      <Footer />
    </div>
  )
}

export default Cart
