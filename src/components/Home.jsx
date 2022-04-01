import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/item");
  };

  return (
    <>
      <h1>If you want to go to ItemList, Click the button!</h1>
      <button onClick={handleClick}>go to ItemList</button>
      <br />
      <Link to="/item">you can go to item too!</Link>
    </>
  );
};

export default Home;
