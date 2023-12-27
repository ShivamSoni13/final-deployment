import axios from "axios";

const Base_URL = "https://librarymgmtapp.onrender.com/";

// const publicRequest = axios.create({
//   baseURL: Base_URL,
// });

const userRequest = axios.create({
  baseURL: Base_URL + "api",
});

// const bookingRequest = axios.create({
//   baseURL: Base_URL + "booking",
// });

export { userRequest };
