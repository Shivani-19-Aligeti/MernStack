import axios from "axios";

const API = "localhost:2000/products/all";

const getProducts = () => axios.get(API);

export { getProducts };
