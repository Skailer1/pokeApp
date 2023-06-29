import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();
  const [username, setUsername] = useState()

  const onHandleChange = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  }


  const onLogin = ()=> {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login(username)

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <label className="form-label">Type Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="i.e. skailer"
          onChange={onHandleChange}
        />
      <button className="btn btn-primary mt-2"
      onClick={onLogin}>
        Login
      </button>
    </div>
  )
}