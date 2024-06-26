import axios from "axios";
import { FacturayData } from "../entities/factura";

const BASE_URL = "https://donde-alfredo-backend.onrender.com";

const facturaService = {
  create: async (total: number, fecha: string, id_usuario: number) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/factura/create`,
        method: "post",
        data: {
          total: total,
          fecha: fecha,
          id_usuario: id_usuario,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },
};

export default facturaService;
