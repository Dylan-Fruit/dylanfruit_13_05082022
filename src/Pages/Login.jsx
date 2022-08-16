import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import {
  updatePassword,
  updateUserName,
  updateUserToken,
  updateRememberMe,
} from "../features/userData.slice";
import { NavLink } from "react-router-dom";

const Login = () => {
  const userName = useSelector((state) => state.userData.userName);
  const password = useSelector((state) => state.userData.password);
  const rememberMe = useSelector((state) => state.userData.rememberMe);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    //e.preventDefault();
    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(updateUserToken(data.body.token));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login-page">
      <Header />
      <div className="main">
        <section className="sign-in-content">
          <i className="fa fa-user-circle" />
          <h1>Sign In</h1>
          <form className="sign-in-form">
            <div className="sign-in-input">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                onChange={(e) => dispatch(updateUserName(e.target.value))}
                value={userName}
              />
            </div>
            <div className="sign-in-input">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                onChange={(e) => dispatch(updatePassword(e.target.value))}
                value={password}
              />
            </div>
            <div className="sign-in-rememberMe-input">
              <input
                type="checkbox"
                id="remember-me"
                onChange={(e) => dispatch(updateRememberMe(!rememberMe))}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
          </form>
          <NavLink to="/profile">
            <button onClick={handleSubmit}>Sign in</button>
          </NavLink>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
