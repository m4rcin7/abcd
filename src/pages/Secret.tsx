import { useAuth } from "../hooks/useAuth";

const Secret = () => {
  const { logout } = useAuth();

  const handleLogout = (): void => {
    logout();
  };

  return (
    <div>
      <h1>This is a Secret page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Secret;
