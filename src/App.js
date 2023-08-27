import logo from "./logo.svg";
import "./App.css";
import { App1 } from "./Componenets/App1";
import Routing from "./Componenets/Routing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Componenets/Header";
import Mapping from "./Componenets/Mapping";
import TeamPage from "./Componenets/TeamPage";
import Mentor from "./Componenets/Mentor";
import Adviser from "./Componenets/Adviser";
function App() {
  return (
    <div>
      <div className="">
        <TeamPage />
      </div>
      <div className="mt-5">
        <Mentor />
      </div>
      <div className="mt-5">
        <Adviser />
      </div>
    </div>
  );
}

export default App;
