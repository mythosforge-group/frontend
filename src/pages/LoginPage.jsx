import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { login } from "@/services/authServices";
import { jwtDecode } from "jwt-decode";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (username && password) {
      try {
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
        navigate("/home");
      } catch (err) {
        console.error(err);
        setError("Usuário ou senha inválidos");
      }
    } else {
      setError("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-login-back">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-[#2c1a0f]">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-[#2c1a0f] mb-2">Usuário</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#2c1a0f] mb-2">Senha</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#7c3f00] hover:bg-[#5c2d00] text-white text-lg px-6 py-3 rounded-full"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
