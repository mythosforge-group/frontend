import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedToken = localStorage.getItem("token");

export default function HomePage() {
  const [user] = useState(storedUser);
  const [token] = useState(storedToken);
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaignName, setNewCampaignName] = useState("");
  const [newCampaignDescription, setNewCampaignDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get(`/api/campaigns/user/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCampaigns(response.data);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar campanhas.");
      } finally {
        setLoading(false);
      }
    };

    if (user?.id && token) {
      fetchCampaigns();
    }
  }, [user?.id, token]);
  
  const handleCreateCampaign = async () => {
    if (!newCampaignName.trim() || !newCampaignDescription.trim()) return;
  
    try {
      const response = await axios.post(
        "/api/campaigns",
        {
          title: newCampaignName,
          description: newCampaignDescription,
          owner: { id: user.id },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCampaigns((prev) => [...prev, response.data]);
      setNewCampaignName("");
      setNewCampaignDescription("");
    } catch (err) {
      console.error(err);
      setError("Erro ao criar campanha.");
    }
  };
  
  return (
    <div className="p-6 bg-[#fbf4dd] min-h-screen text-[#2c1a0f]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Olá, {user?.username}!</h1>
        <Link to="/user-management">
          <Button className="bg-[#7c3f00] hover:bg-[#5c2d00] text-white rounded-full px-6 py-2">
            Gerenciar Conta
          </Button>
        </Link>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Criar nova campanha</h2>
        <div className="grid gap-4 mb-4">
          <input
            type="text"
            className="px-4 py-2 border rounded w-full"
            placeholder="Nome da nova campanha"
            value={newCampaignName}
            onChange={(e) => setNewCampaignName(e.target.value)}
          />
          <textarea
            rows={4}
            className="px-4 py-2 border rounded w-full"
            placeholder="Descrição da campanha"
            value={newCampaignDescription}
            onChange={(e) => setNewCampaignDescription(e.target.value)}
          />
        </div>
        <Button onClick={handleCreateCampaign} className="bg-[#7c3f00] text-white">
          Criar
        </Button>
      </section>


      <section>
        <h2 className="text-2xl font-semibold mb-4">Suas Campanhas</h2>
        {loading ? (
          <p>Carregando campanhas...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : campaigns.length === 0 ? (
          <p>Nenhuma campanha cadastrada ainda.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{campaign.title}</h3>
                <p className="text-sm text-[#555]">{campaign.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}