import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 text-gray-800 font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
        <h1 className="text-2xl font-bold">Fable Mind’s</h1>
        <div className="space-x-4">
          <a href="#" className="text-purple-600 hover:underline">
            Login
          </a>
          <a href="#" className="text-purple-600 hover:underline">
            Comece Agora
          </a>
        </div>
      </header>

      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Crie histórias interativas incríveis
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Fable Mind’s é uma plataforma imersiva que utiliza IA para ajudar
          jogadores de RPG e mestres a criarem histórias dinâmicas. Transforme
          sua imaginação em realidade.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-full">
          Comece gratuitamente
        </Button>
      </section>

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
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2 text-purple-700">
              {feature.title}
            </h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="text-center px-6 py-12 max-w-3xl mx-auto italic text-gray-700">
        <p>
          “Fable Mind’s revolucionou minhas sessões de RPG. A capacidade de
          criar histórias dinâmicas e interagir com NPCs inteligentes elevou o
          nível das aventuras.”
        </p>
        <p className="mt-4 font-semibold not-italic">Yan Hill</p>
      </section>

      <section className="text-center bg-purple-50 py-16 px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Comece com Fable Mind’s agora.
        </h2>
        <p className="mb-6 text-lg">
          Crie personagens e mundos com o poder da IA. Transforme sua mesa de
          RPG em algo épico.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-6 py-3 rounded-full">
          Experimente Gratuitamente
        </Button>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Fable Mind’s. All rights reserved.
      </footer>
    </div>
  );
}
