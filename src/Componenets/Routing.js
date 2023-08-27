import React from "react";
import { useNavigate } from "react-router-dom";
import { App1 } from "./App1";

const Routing = () => {
  const navigate = useNavigate(); ///declare navigate
  return (
    <div>
      Routing
      <h1> amit</h1>
      <img src="logo192.png"></img>
      <button onClick={() => navigate("/app1")}>go to App1 </button>//onClick
    </div>
  );
};

export default Routing;
