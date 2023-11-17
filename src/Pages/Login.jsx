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
      <div className="col-8 bg-success">
        <h1>div</h1>
      </div>
      <div className="col-4 bg-warning">
        <h2>div</h2>
      </div>
    </div>
  );
}
export default Login;
