import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Toast = () => {
  const { mensaje } = useContext(CartContext);

  if (!mensaje) return null;

  return (
    <div className="toast">
      {mensaje}
    </div>
  );
};

export default Toast;

