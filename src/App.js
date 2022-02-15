import Routes from "./Routes";
import { useSelector } from "react-redux";
import chatIcon from "./Resources/Assets/img/Group 8204.svg";
import chatHeader from "./Resources/Assets/img/Group 8205.png";
import "./App.css";
import { useState } from "react";
function App() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [openChat, setOpenChat] = useState(false);
  document
    .querySelector("html")
    .setAttribute("dir", currentLocal.language === "English" ? "ltr" : "rtl");

  return (
    <div className="App">
      <Routes />
  
      <img
        src={chatIcon}
        alt="chatIcon"
        className="chatIcon"
        onClick={() => {
          setOpenChat(!openChat);
        }}
      />

    </div>
  );
}

export default App;
