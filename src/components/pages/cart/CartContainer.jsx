import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./CartContainer.css"

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "Desea eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `No eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito no eliminado", "", "info");
      }
    });
  };

  let total = getTotalPrice();
  return (
    <div>
      

      {cart.map((elemento) => {
        return (
          <div className="cartContainer"
            key={elemento.id}
            style={{ width: "200px"}}
          >
            <h3>{elemento.title}</h3>
            <img src={elemento.img} alt={elemento.title} />
            <h3>U$S {elemento.price}</h3>
            <h3>Cantidad: {elemento.quantity}</h3>
            <Button variant="contained" onClick={() => deleteById(elemento.id)}>
              Eliminar
            </Button>
          </div>
        );
      })}

      {cart.length > 0 && (
        <>
          <Button style={{margin: "40px", marginLeft: "40%"}} variant="outlined" onClick={limpiar}>
            Limpiar carrito
          </Button>
          <Link to="/checkout">
            <Button  style={{margin: "40px"}} variant="outlined">Terminar compra</Button>
          </Link>
        </>
      )}

      <h2 className="cartDetail">Total: U$S {total} </h2>
    </div>
  );
};

export default CartContainer;
