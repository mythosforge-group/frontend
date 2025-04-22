import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { login } from "@/services/authServices";
import { jwtDecode } from "jwt-decode";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (username && email && password) {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.post("/api/users", {
          // Utilizando a URL relativa
          username,
          email,
          password,
        });
        const data = await login({ username, password });
        const decoded = jwtDecode(data.token);
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: decoded.id, 
            username: decoded.sub, 
            email: decoded.email 
          })
        );
        alert("Cadastro realizado com sucesso!");
        navigate("/home");
      } catch (err) {
        console.log("Erro ao fazer requisição:", err);
        setError(err.response?.data?.message || "Erro desconhecido");
      }
    } else {
      setError("Preencha todos os campos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-register-back">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-[#2c1a0f]">Registrar</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-[#2c1a0f] mb-2">Usuário</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Escolha seu usuário"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#2c1a0f] mb-2">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#2c1a0f] mb-2">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Escolha uma senha"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#7c3f00] hover:bg-[#5c2d00] text-white text-lg px-6 py-3 rounded-full"
          >
            Registrar
          </Button>
        </form>
      </div>
    </div>
  );
}
