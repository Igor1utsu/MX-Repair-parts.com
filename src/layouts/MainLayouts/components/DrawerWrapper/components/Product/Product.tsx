import styles from "./Product.module.scss"
import clsx from "clsx"
import { CloseOutlined } from "@ant-design/icons"
import { CartContext } from "../../../../../../context/CartContext"
import { FC, memo, useContext, useMemo } from "react"
import { PATH_TO_PICTURE } from "../../../../../../shared/constants/Path.constants"
import { getProduct } from "../../../../../../shared/utils/GetProduct.utils"
import { Button } from "../../../../../../shared/components"

interface IProductProps {
  id: number
  qty: number
}

export const Product: FC<IProductProps> = memo((props) => {
  const { id, qty } = props

  const { removeFromCart } = useContext(CartContext)

  const product = useMemo(() => getProduct(id), [id])
  const productPrice = `${qty} x $${product?.price}`

  return (
    <>
      <li className={clsx(styles["Product"], "flex-row")}>
        {!product && <span>Product no longer available</span>}
        {product && (
          <>
            <div className={styles["Product__img-wrapper"]}>
              <img
                src={PATH_TO_PICTURE.PARTS + product?.image}
                alt={product?.name}
              />
            </div>
            <div className={clsx(styles["Product__content"], "flex-col")}>
              <h3 className={styles["Product__title"]}>{product?.name}</h3>
              <p className={styles["Product__description"]}>
                {product?.partNumber}
              </p>
              <span>{productPrice}</span>
            </div>
          </>
        )}
        <Button
          size="small"
          icon={<CloseOutlined />}
          onClick={() => product && removeFromCart(product.id)}
          className={styles.Product__remove}
        ></Button>
      </li>
    </>
  )
})