import axios from "axios";

function Login() {
  const getToken = async () => {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/tweets",
    });
  };

  return (
    <div className="row">
      <div className="d-none d-md-inline col-md-5 col-lg-7 bg-success m-o">
        <h1>div</h1>
      </div>
      <div className="col-12 col-md-7 col-lg-5 bg-warning m-0">
        <h2>div</h2>
      </div>
    </div>
  );
}
export default Login;
