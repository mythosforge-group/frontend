const Features = () => {
  return (
    <section className="p-12 bg-white text-gray-800 text-center">
      <h2 className="text-3xl font-bold mb-8">Platform Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Interactive Storytelling</h3>
          <p>
            Create and evolve your character's story with intelligent narrative
            choices.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Dynamic NPC Generation</h3>
          <p>
            Generate lifelike NPCs with their own motivations and backgrounds.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Campaign Building Tools</h3>
          <p>Game masters can design and manage custom campaigns with ease.</p>
        </div>
      </div>
    </section>
  );
};
export default Features;
