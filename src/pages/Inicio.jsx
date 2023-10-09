import { Link } from "react-router-dom";
import useAdminPanel from "../hooks/useAdminPanel";

const Inicio = () => {
  const { user, logout, loading } = useAdminPanel();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav
        style={{
          backgroundColor: "#FF0",
          padding: 10,
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/trabajadores">Trabajadores</Link>
        <Link>Productos</Link>
        <Link>Usuarios</Link>
      </nav>

      <h1>Welcome {user.email}</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Inicio;
