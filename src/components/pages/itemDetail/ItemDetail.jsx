import CounterContainer from "../../common/Counter/CounterContainer"
import "./ItemDetail.css";


const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
  return (
    <div className="itemDetailContainer">
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <h3>U$S {product.price}</h3>
      <CounterContainer cantidadEnCarrito={cantidadEnCarrito} stock={product.stock} agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default ItemDetail;
