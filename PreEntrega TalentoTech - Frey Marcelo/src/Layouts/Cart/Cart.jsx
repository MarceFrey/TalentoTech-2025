import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrrito from '../../components/Carrito/Carrito'
import './Cart.css';

const Cart = ({carrito, removeCart}) => {
  return (
    <div className='cart-background'>
      <Header/>
      <Carrrito cart={carrito} removeCart={removeCart}/>
      <Footer/>
    </div>
  )
}

export default Cart
