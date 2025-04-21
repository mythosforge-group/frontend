export default function HomePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Olá, {user?.username}!</h1>
    </div>
  );
}
