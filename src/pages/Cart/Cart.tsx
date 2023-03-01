import { Button } from "antd"
import { FC, memo, useContext } from "react"
import { CartItem } from "../../components/CartItem/CartItem"
import { GettingPickup } from "../../components/GettingPickup/GettingPickup"
import { Logo } from "../../components/Logo/Logo"
import { CartContext } from "../../context/CartContext"
import { CART_PAGE_TITLE } from "../../shared/constants/Page.constants"
import { usePageTitle } from "../../shared/hooks/usePageTitle"
import "./Cart.scss"

export const Cart: FC = memo(() => {
  const { shoppingCart, total, items } = useContext(CartContext)

  usePageTitle(CART_PAGE_TITLE)

  return (
    <>
      <div className="cart-container">
        <div className="cart">
          <header className="cart__header">
            <Logo />
          </header>
          <main className="cart__main">
            <section className="cart__section cart-product">
              <ul className="cart__list">
                {shoppingCart.length === 0 && (
                  <li className="cart__message">
                    There are no items in your cart.
                  </li>
                )}
                {shoppingCart.map((product, index) => {
                  return (
                    <CartItem id={product.id} qty={product.qty} key={index} />
                  )
                })}
              </ul>
              <div className="cart__order order">
                <h2 className="order__title">Total price</h2>
                <div className="order__content total">
                  <span>{"Items ( " + items + " )"}</span>
                  <span className="total__price">
                    {total.toFixed(2) + " $"}
                  </span>
                </div>
                <Button type="ghost" className="btn--gree btn--large">
                  Buy
                </Button>
              </div>
            </section>
            <section className="cart__section">
              <GettingPickup />
            </section>
          </main>
        </div>
      </div>
    </>
  )
})
