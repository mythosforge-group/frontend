import axios from "axios";

export const login = async (credentials) => {
  const response = await axios.post(
    "http://localhost:8080/auth/login",
    credentials
  );
  console.log('response', response);
  return response.data; // deve retornar o token
};
