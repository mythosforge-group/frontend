import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="bg-rpg-parchment min-h-screen bg-[#fdf6e3] text-[#3e2c1c] font-serif">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#d9cbaa]">
        <h1 className="text-3xl font-bold tracking-wide">Fable Mind’s</h1>
        <div className="space-x-4">
          <a href="#" className="text-[#9a3412] hover:underline">
            Login
          </a>
          <a href="#" className="text-[#9a3412] hover:underline">
            Comece Agora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Forje lendas com inteligência artificial
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Fable Mind’s é a ferramenta definitiva para mestres e jogadores
          criarem histórias épicas com o auxílio da IA.
        </p>
        <Button className="bg-[#7c3f00] hover:bg-[#5c2d00] text-white text-lg px-6 py-3 rounded-full shadow-md">
          Comece gratuitamente
        </Button>
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
            className="p-6 bg-[#fffaf0] rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 text-[#7c3f00]">
              {feature.title}
            </h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section className="text-center px-6 py-12 max-w-3xl mx-auto italic text-[#4a3826]">
        <p>
          “Fable Mind’s revolucionou minhas sessões de RPG. A capacidade de
          criar histórias dinâmicas e interagir com NPCs inteligentes elevou o
          nível das aventuras.”
        </p>
        <p className="mt-4 font-semibold not-italic">Yan Hill</p>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-[#fffaf0] py-16 px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Comece sua saga com Fable Mind’s.
        </h2>
        <p className="mb-6 text-lg">
          Crie personagens e mundos com o poder da IA. Torne cada sessão única.
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
  );
}
