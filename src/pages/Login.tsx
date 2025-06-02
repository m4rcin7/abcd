import { useState, type FormEvent } from "react";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      const fakeUser = {
        id: "1",
        name: "John Doe",
        email: "user@example.com",
        password: "password",
        username: "user",
      };
      await login(fakeUser);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full space-y-6 animate-fade-in">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to your account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
