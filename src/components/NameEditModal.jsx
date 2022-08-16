import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { updateNameStatus } from "../features/userData.slice";

const NameEditModal = () => {
  const userToken = useSelector((state) => state.userData.userToken);
  const firstName = useSelector((state) => state.userData.firstName);
  const lastName = useSelector((state) => state.userData.lastName);
  const dispatch = useDispatch();

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);

  function handleConfirm(e) {
    e.preventDefault();

    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + userToken,
      },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(updateNameStatus(false));
        }
      })
      .catch((error) => console.log(error));
  }

  function handleCancel() {
    dispatch(updateNameStatus(false));
  }

  return (
    <form className="user-form">
      <input
        type="text"
        onChange={(e) => setNewFirstName(e.target.value)}
        value={newFirstName}
      />
      <input
        type="text"
        onChange={(e) => setNewLastName(e.target.value)}
        value={newLastName}
      />
      <button onClick={handleConfirm}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default NameEditModal;
