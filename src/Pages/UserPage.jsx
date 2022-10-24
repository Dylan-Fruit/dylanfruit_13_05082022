import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import Account from "../components/Account";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";
import NameEditModal from "../components/NameEditModal";
import {
  updateFirstName,
  updateLastName,
  updateNameStatus,
} from "../features/userData.slice";

const UserPage = () => {
  const firstName = useSelector((state) => state.userData.firstName);
  const lastName = useSelector((state) => state.userData.lastName);
  const userToken = useSelector((state) => state.userData.userToken);
  const nameStatus = useSelector((state) => state.userData.nameStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function getData() {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + userToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateFirstName(data.body.firstName));
        dispatch(updateLastName(data.body.lastName));
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  }

  getData();

  function handleEditName() {
    dispatch(updateNameStatus(true));
  }

  return (
    <div className="user-page">
      <Header />
      <div className="main">
        <div className="user-header">
          <h1>Welcome Back</h1>
          {!nameStatus && (
            <h1 className="user-name">{firstName + " " + lastName}!</h1>
          )}
          {nameStatus && <NameEditModal />}
          {!nameStatus && (
            <button className="edit-button" onClick={handleEditName}>
              Edit name
            </button>
          )}
        </div>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          amountDesc="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          amountDesc="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          amountDesc="Current Balance"
        />
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
