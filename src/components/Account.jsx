import React from "react";

const Account = ({ title, amount, amountDesc }) => {
  return (
    <section className="account">
      <div className="content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{amountDesc}</p>
      </div>
    </section>
  );
};

export default Account;
