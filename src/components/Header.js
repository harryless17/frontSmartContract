import React from "react";
import Form from "./Form";


const Header = ({ history, handleSubmit }) => {
  return (
    <div>
      <h1>Immobilier</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      
    </div>
  );
};

export default Header;
