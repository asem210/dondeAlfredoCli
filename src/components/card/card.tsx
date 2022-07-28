import "./card.css";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export interface Props {
  booksSeller: Array<{
    id: number;
    title: string;
    description: string;
    author: string;
    price: number;
    image: string;
    percentDiscount?: number;
    sku: string;
    isbn: string;
    editorial: string;
    anyo: number;
    pages?: number;
    language: string;
    weight?: number;
    width?: number;
    height?: number;
    age: string;
  }>;
}

export function calculatePriceWithDiscount(
  priceDefault: number,
  percentDiscount: number
) {
  const priceWithDisc = priceDefault * ((100 - percentDiscount) / 100);
  return priceWithDisc;
}

const Card: React.FC<Props> = ({ booksSeller }) => {
  const navigate = useNavigate();
  const goToDetailsComp = (id: number) => {
    navigate(`/orderdetails/${id}`);
  };

  return (
    <div className="container-cards">
      {booksSeller.map((book) => {
        return (
          <div
            key={book.id}
            className="card"
            onClick={() => goToDetailsComp(book.id)}
          >
            <div className="title-prevent">
              <a href={"'#'"}>Preventa</a>
            </div>
            <img src={book.image} alt="card"></img>

            <div className="description">
              <p>{book.author}</p>
              <h3>{book.title}</h3>
            </div>

            <div className="card-bot">
              <div className="precio">
                {book.percentDiscount ? (
                  <>
                    <span className="price-before-discount">
                      S/ {book.price}
                    </span>
                    <p className="price">
                      S/{" "}
                      {calculatePriceWithDiscount(
                        book.price,
                        book.percentDiscount
                      ).toFixed(2)}
                    </p>
                  </>
                ) : (
                  <p className="price">S/ {book.price}</p>
                )}
              </div>
              <div className="descuento">
                {book.percentDiscount ? <p>{book.percentDiscount} %</p> : ""}
              </div>
            </div>

            <div className="container-button-order">
              <div className="wrapper-button-order">
                <button className="button-order">
                  <span>Ordenar</span>
                </button>
                <button className="button-order button-order-hover">
                  <BsCart className="icon-cart-button"></BsCart>
                  <span>Enviar al carrito</span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
