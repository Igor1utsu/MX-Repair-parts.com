import "./DrawerCart.scss"
import { Button, Drawer } from "antd"
import { useContext } from "react"
import { CartContext } from "../../../../context/CartContext"
import { CartItem, TypeEnum } from "../../../CartItem/CartItem"
import { useNavigate } from "react-router-dom"

interface IDrawerCartProps {
  open: boolean
  onClose: () => void
}

export const DrawerCart = ({ open, onClose }: IDrawerCartProps) => {
  const { shoppingCart, items, total } = useContext(CartContext)
  const history = useNavigate()

  return (
    <Drawer
      title={`items: ${items}`}
      placement="right"
      onClose={onClose}
      open={open}
      className="drawer"
      headerStyle={{ textAlign: "center" }}
    >
      <div className="drawer__content total">
        <span className="total__text">Total:</span>
        <span className="total__price">{`${total.toFixed(2)} $`}</span>
      </div>
      {shoppingCart.length ? (
        <>
          <Button
            type="primary"
            className="btn--large"
            onClick={() => history("/shopcart")}
          >
            Сheckout
          </Button>

          <ul className="drawer__list">
            {shoppingCart.map((product, index) => {
              return (
                <CartItem
                  id={product.id}
                  qty={product.qty}
                  key={index}
                  type={TypeEnum.Drawer}
                />
              )
            })}
          </ul>
        </>
      ) : (
        <span>There are no items in your cart.</span>
      )}
    </Drawer>
  )
}
