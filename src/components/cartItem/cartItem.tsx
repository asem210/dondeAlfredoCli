import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { books } from "../listCards/cards";
import "./cartItem.css";
import { calculatePriceWithDiscount } from "../card/card";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();
  const item = books.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="app-container-cart-item">
      <div className="wrapper-grid">
        <div className="cart-item-img">
          <img src={item.image} alt="imagen del producto"></img>
        </div>
        <div className="cart-item-info">
          <h1>{item.title}</h1>
          <div className="cart-item-prices">
            {item.percentDiscount ? (
              <>
                <span className="cart-item-price-unique">
                  S/{" "}
                  {calculatePriceWithDiscount(item.price, item.percentDiscount)}
                </span>
                <span className="cart-item-price-subtotal">
                  S/{" "}
                  {(
                    calculatePriceWithDiscount(
                      item.price,
                      item.percentDiscount
                    ) * quantity
                  ).toFixed(2)}
                </span>
              </>
            ) : (
              <>
                <span className="cart-item-price-unique">S/ {item.price}</span>
                <span className="cart-item-price-subtotal">
                  S/ {(item.price * quantity).toFixed(2)}
                </span>
              </>
            )}
          </div>
          <div className="cart-item-info-quantity">
            {quantity > 0 && (
              <>
                <AiFillMinusCircle
                  className="cart-item-icon-deacrease"
                  title="Disminuir 1 libro"
                  onClick={() => decreaseCartQuantity(item.id)}
                ></AiFillMinusCircle>
                <span className="cart-item-quantity">x {quantity}</span>
              </>
            )}
            <AiFillPlusCircle
              className="cart-item-icon-increase"
              title="Aumentar 1 libro"
              onClick={() => increaseCartQuantity(item.id)}
            ></AiFillPlusCircle>
          </div>
        </div>
        <div className="cart-item-btn-delete">
          <FiDelete
            className="icon-delete-item"
            title="Eliminar libro del carrito de compras"
            onClick={() => removeFromCart(item.id)}
          ></FiDelete>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
