import { Link, useNavigate } from "react-router-dom";
import useAdminPanel from "../hooks/useAdminPanel";

const Register = () => {
  const { handleChange, singup, user } = useAdminPanel();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await singup(user.usuario, user.contraseña);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Regístrate</h1>

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

        <button>Registrate</button>
        <Link to="/login">
          <button>¿Tienes cuenta? Login</button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
