const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-16 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Fable Mind’s</h1>
      <p className="text-xl mb-6">
        Create epic RPG stories with AI-guided creativity
      </p>
      <div className="space-x-4">
        <a
          href="/signup"
          className="bg-white text-indigo-800 px-6 py-2 rounded-full font-semibold"
        >
          Create Account
        </a>
        <a href="/login" className="border border-white px-6 py-2 rounded-full">
          Log In
        </a>
      </div>
    </section>
  );
};
export default Hero;
