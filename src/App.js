import Routes from "./Routes";
import { useSelector } from "react-redux";
import "./App.css";
function App() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  document
    .querySelector("html")
    .setAttribute("dir", currentLocal.language === "English" ? "ltr" : "rtl");

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
