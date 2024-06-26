import axios from "axios";
import { CategoryData } from "../entities/category";

const BASE_URL = "https://donde-alfredo-backend.onrender.com";

const categoryService = {
  list: async (): Promise<CategoryData[] | null> => {
    try {
      const { data } = await axios.get(`${BASE_URL}/category/all`);
      return data.data;
    } catch (error) {
      return null;
    }
  },

  QuantList: async (num: number): Promise<CategoryData[] | null> => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/category/listPorCantidad`,
        method: "post",
        data: {
          num: num,
        },
      });
      return data.data;
    } catch (error) {
      return null;
    }
  },

  count: async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/category/count`);
      return data.data;
    } catch (error) {
      return null;
    }
  },

  create: async (name: string, description: string, url: string) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/category/create`,
        method: "post",
        data: {
          name: name,
          description: description,
          url: url,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },
  showID: async (name: string) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/category/getID`,
        method: "post",
        data: {
          name: name,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  edit: async (name: string, description: string, url: string, id: number) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/category/edit`,
        method: "post",
        data: {
          name: name,
          description: description,
          url: url,
          id: id,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  delete: async (id: number) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/category/delete`,
        method: "post",
        data: {
          id: id,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },

  getName: async (id: number) => {
    try {
      const { data } = await axios({
        url: `${BASE_URL}/category/getname`,
        method: "post",
        data: {
          id: id,
        },
      });
      return data;
    } catch (error) {
      return null;
    }
  },
};

export default categoryService;
