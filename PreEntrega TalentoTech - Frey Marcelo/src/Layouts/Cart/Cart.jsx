import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carrrito from '../../components/Carrito/Carrito'

const Cart = ({carrito, removeCart}) => {
  return (
    <div>
      <Header/>
      <Carrrito cart={carrito} removeCart={removeCart}/>
      <Footer/>
    </div>
  )
}

export default Cart
