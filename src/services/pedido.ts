import axios from "axios";

const BASE_URL = "https://donde-alfredo-backend.onrender.com";

const pedidoService = {
  create: async (
    cantidad: number,
    subtotal: number,
    id_platillo: number,
    id_factura: number
  ) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/pedido/create`,
        method: "post",
        data: {
          cantidad: cantidad,
          subtotal: subtotal,
          id_platillo: id_platillo,
          id_factura: id_factura,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  listPorUsuario: async (id: number) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/pedido/selectPedidoPorUsuario`,
        method: "post",
        data: {
          id: id,
        },
      });
      return data.data;
    } catch (error) {
      return null;
    }
  },
};

export default pedidoService;
