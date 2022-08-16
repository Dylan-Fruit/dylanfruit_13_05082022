import React from "react";
import argentBankLogo from "../../assets/images/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateUserName,
  updatePassword,
  updateUserToken,
} from "../../features/userData.slice";
import { useLocation } from "react-router-dom";

const Header = () => {
  const firstName = useSelector((state) => state.userData.firstName);
  const rememberMe = useSelector((state) => state.userData.rememberMe);
  const dispatch = useDispatch();

  let location = useLocation();

  function handleSignOut() {
    dispatch(updateFirstName(""));
    dispatch(updateLastName(""));
    dispatch(updateUserToken(""));
    if (!rememberMe) {
      dispatch(updateUserName(""));
      dispatch(updatePassword(""));
    }
  }

  return (
    <div className="header">
      <nav className="header-main-nav">
        <NavLink to="/">
          <img src={argentBankLogo} alt="Logo Argent Bank" />
        </NavLink>
        <div
          className={
            location.pathname !== "/profile"
              ? "header-main-nav-profile"
              : "header-main-nav-signout"
          }
        >
          <i className="fa fa-user-circle" />
          {location.pathname === "/profile" && <p>{firstName}</p>}

          {location.pathname === "/profile" ? (
            <div className="sign-out">
              <i className="fa fa-sign-out" />
              <NavLink to="/">
                <p onClick={handleSignOut}>Sign Out</p>
              </NavLink>
            </div>
          ) : (
            <NavLink to="/login">
              <p>Sign In</p>
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
