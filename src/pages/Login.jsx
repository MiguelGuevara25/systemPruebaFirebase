import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAdminPanel from "../hooks/useAdminPanel";

const Login = () => {
  const { login } = useAdminPanel();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(user.usuario, user.contraseña);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <input
          id="usuario"
          name="usuario"
          type="email"
          placeholder="Usuario"
          onChange={handleChange}
        />

        <input
          id="contraseña"
          name="contraseña"
          type="text"
          placeholder="Contraseña"
          onChange={handleChange}
        />

        <button>Ingresar</button>
        <Link to="/register">
          <button>¿No tienes cuenta? Regístrate</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
