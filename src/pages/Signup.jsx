const Signup = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>
        <input className="w-full mb-4 p-2 border rounded" placeholder="Name" />
        <input className="w-full mb-4 p-2 border rounded" placeholder="Email" />
        <input
          className="w-full mb-4 p-2 border rounded"
          placeholder="Password"
          type="password"
        />
        <button className="w-full bg-indigo-600 text-white py-2 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Signup;
