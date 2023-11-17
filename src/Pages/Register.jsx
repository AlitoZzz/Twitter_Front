import axios from "axios";
import { NavLink } from "react-router-dom";

function Register() {
  const getCreateUser = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/tweets",
    });
  };

  return (
    <div className="row">
      <div className="d-none d-md-inline col-md-5 col-lg-7 bg-success m-o">
        <h2>azul</h2>
      </div>
      <div className="col-12 col-md-7 col-lg-5 bg-light p-5 m-0">
        <h1>Sign up</h1>
        <p>Create an account and strat using X</p>
        <form>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="firsname"
              placeholder="First name"
              name="firstname"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="lastname"
              placeholder="Last name"
              name="lastname"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              name="username"
            />
          </div>
          <div class="mb-3">
            <input class="form-control" type="file" id="formFile" name="pfp"/>
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" class="w-100 btn sign-up-button rounded-pill mb-4">
            Sign up
          </button>
        </form>
        <p className="d-inline me-2">Already have an account? </p>
        <NavLink className="sign-in-link" to="/login">Sign in</NavLink>
      </div>
    </div>
  );
}
export default Register;
