import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <MainContainer />
    </div>
  );
}

export default App;
