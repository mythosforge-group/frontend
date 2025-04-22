import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function UserManagementPage() {
  const navigate = useNavigate();
  const userStored = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [username, setUsername] = useState(userStored.username);
  const [email, setEmail] = useState(userStored.email);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdate = async () => {
    try {
      await axios.put(
        `/api/users/${userStored.id}`,
        { username, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.setItem("user", JSON.stringify({ ...userStored, username, email}));
      setSuccess("Dados atualizados com sucesso!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Erro ao atualizar dados.");
    }
  };

  const handleDelete = async () => {
    const confirmed = confirm("Tem certeza que deseja deletar sua conta? Essa ação não pode ser desfeita.");
    if (!confirmed) return;

    try {
      await axios.delete(`/api/users/${userStored.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Erro ao deletar conta.");
    }
  };

  return (
    <div className="p-6 bg-[#fbf4dd] min-h-screen text-[#2c1a0f]">
      <h1 className="text-3xl font-bold mb-6">Gerenciar Conta</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <div className="mb-4">
        <label className="block mb-1 font-medium">Usuário</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">E-mail</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <Button onClick={handleUpdate} className="bg-[#7c3f00] text-white">
          Salvar Alterações
        </Button>
        <Button onClick={handleDelete} className="bg-red-600 hover:bg-red-700 text-white">
          Deletar Conta
        </Button>
      </div>
    </div>
  );
}
