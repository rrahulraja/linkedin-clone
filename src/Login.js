import React from "react";
import "./Login.css";

function Login() {
  const loginToApp = () => {};
  const register = () => {};

  return (
    <div className="login">
      <img
        src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG30.png"
        alt=""
      />
      <form>
        <input type="text" placeholder="Full name required if registering" />
        <input type="text" placeholder="Profile pic URL (optional)" />
        <input type="text" name="" id="" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={loginToApp}>Sign In</button>
      </form>

      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          {" "}
          Register Now{" "}
        </span>
      </p>
    </div>
  );
}

export default Login;
