import React from "react";
import ChatBox from "./components/chatBox/ChatBox";
import Home from "./pages/home/Home";
import "./App.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="">
      
      <Home />
      <ChatBox />
    </div>
  );
};

export default App;
