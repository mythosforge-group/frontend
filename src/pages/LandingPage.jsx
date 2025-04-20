import { Link } from "react-router-dom"; // Importa o Link do React Router
import { Button } from "@/components/ui/button";
export default function LandingPage() {
  return (
    <div className="min-h-screen text-[#2c1a0f] font-serif">
      {/* Header - sem fundo */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#cdbb9a] bg-[#fdf6e3]">
        <h1 className="text-3xl font-bold tracking-wide">Fable Mind’s</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-[#6b2e0d] hover:underline">
            <Button className="bg-[#7c3f00] hover:bg-[#5c2d00] text-white text-lg px-6 py-3 rounded-full shadow-md">
              Login
            </Button>
          </Link>
          <Link to="/register" className="text-[#6b2e0d] hover:underline">
            <Button className="bg-[#7c3f00] hover:bg-[#5c2d00] text-white text-lg px-6 py-3 rounded-full shadow-md">
              Comece Agora
            </Button>
          </Link>
        </div>
      </header>

      {/* Conteúdo com fundo de papel */}
      <div className="bg-rpg-parchment bg-[#fbf4dd]">
        {/* Hero */}
        <section className="text-center py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#2c1a0f] bg-opacity-60 bg-white">
            Forje lendas com inteligência artificial
          </h2>
          <p className="text-lg md:text-xl mb-6 text-[#3d2a1a] bg-opacity-60 bg-white">
            Fable Mind’s é a ferramenta definitiva para mestres e jogadores
            criarem histórias épicas com o auxílio da IA.
          </p>
          <Link to="/register" className="text-[#6b2e0d] hover:underline">
            <Button className="bg-[#7c3f00] hover:bg-[#5c2d00] text-white text-lg px-6 py-3 rounded-full shadow-md">
              Comece gratuitamente
            </Button>
          </Link>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-6 py-12">
          {[
            {
              title: "Histórias guiadas por IA",
              desc: "Crie campanhas e personagens únicos com o auxílio de IA avançada.",
            },
            {
              title: "Personagens inteligentes",
              desc: "Simule interações com NPCs realistas e ricos em personalidade.",
            },
            {
              title: "Ferramentas de campanha",
              desc: "Construa missões e enredos sem complicações.",
            },
            {
              title: "Colaboração simplificada",
              desc: "Crie histórias com seu grupo de forma simples e colaborativa.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#fff8e5] rounded-2xl shadow-md hover:shadow-lg transition text-[#3a2819]"
            >
              <h3 className="text-xl font-bold mb-2 text-[#7c3f00]">
                {feature.title}
              </h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <section className="text-center bg-[#fff8e5] py-16 px-6">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#2c1a0f]">
            Comece sua saga com Fable Mind’s.
          </h2>
          <p className="mb-6 text-lg text-[#3a2819]">
            Crie personagens e mundos com o poder da IA. Torne cada sessão
            única.
          </p>
          <Button className="bg-[#7c3f00] hover:bg-[#5c2d00] text-white text-lg px-6 py-3 rounded-full shadow-md">
            Experimente Gratuitamente
          </Button>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-[#5a4630] py-6">
          © 2025 Fable Mind’s. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
