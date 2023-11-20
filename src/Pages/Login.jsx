import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const getToken = async () => {
      const response = await axios({
        method: "post",
        url: "http://localhost:3000/tokens",
        data: { usernameOrEmail: username, password },
      });
      if (response.data.msg) {
        setWrongCredentials(true);
      } else {
        dispatch(login(response.data));
        navigate("/");
      }
    };
    getToken();
  };

  return (
    <div className="row rounded row-rounded h-100 align-items-center">
      <div className="d-none d-md-flex flex-md-column  col-md-5 col-lg-7 bg-hi-welcome p-3 m-0 rounded-start register">
        <svg
          className="ms-3 mt-4 fas "
          width="35"
          height="30"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.5584 0H25.5994L16.7711 10.1662L27.1569 24H19.0249L12.6556 15.6098L5.36774 24H1.32434L10.7671 13.1262L0.803955 0H9.1424L14.8997 7.66892L21.5584 0ZM20.1402 21.5631H22.3793L7.92571 2.30892H5.52288L20.1402 21.5631Z"
            fill="white"
          />
        </svg>
        <h3 className=" mt-auto mb-4 ms-3 me-5 pe-3 text-white">
          Hey! Nice to see you again.
        </h3>
      </div>
      <div className="col-12 col-md-7 col-lg-5 bg-light padding-login media-rounded rounded-end m-0 register d-flex flex-column justify-content-center">
        <h2 className="fw-bold d-block">Login</h2>
        <p>Ready to strat using X?</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username o email"
              name="username"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
              required={true}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              required={true}
            />
          </div>
          {wrongCredentials && (
            <p className="text-danger mb-3 fw-semibold">
              Usuario y/o contraseña incorrectos!
            </p>
          )}
          <button
            type="submit"
            className="w-100 btn sign-up-button rounded-pill mb-4"
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="d-inline me-2">Don't have an account? </p>
          <NavLink className="sign-in-link" to="/registro">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default Login;
