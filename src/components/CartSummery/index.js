/* eslint-disable react/no-unknown-property */
import CartContext from '../../Context/CartContext'
import './index.css'

const CartSummery = props => {
  const {orderCheckout} = props

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList, removeAllCartItems} = value
        const totalAmount = cartList.map(each => each.cost * each.quantity)
        const currentTotal = totalAmount.reduce((a, b) => a + b)
        const checkOut = () => {
          orderCheckout()
          removeAllCartItems()
        }
        return (
          <div className="order-summery">
            <h1 className="total-order">Order Total: </h1>
            <div>
              <p testid="total-price" className="total-order">
                ₹{currentTotal}
              </p>
              <button className="checkout-btn" type="button" onClick={checkOut}>
                Place Order
              </button>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartSummery
