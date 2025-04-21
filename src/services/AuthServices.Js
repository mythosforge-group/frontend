const API_BASE = "http://localhost:8080/api";

// src/services/authServices.js
export const register = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users", // Certifique-se de que a URL está correta
      userData
    );
    return response.data;
  } catch (err) {
    console.log("Erro ao fazer requisição:", err);
    throw err;
  }
};

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Credenciais inválidas.");
  }

  return response.json(); // { token: '...' }
};

export const saveToken = (token) => {
  localStorage.setItem("token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const logout = () => {
  localStorage.removeItem("token");
};
