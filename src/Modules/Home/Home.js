import React, {  useState } from "react";
import Footer from "../Common/Footer/Footer";
// import BestPicks from "./BestPicks/BestPicks";
import BestSeller from "./BestSeller/BestSeller";
// import Items from "./Items/Items";
import Navbar from "../Common/Navbar/Navba";
import LandingPage from "./LandingPage/LandingPage";
import OffersComponent from "./OffersComponent/OffersComponent";
import Blog from "./OurBlog/Blog";
import SalesComponent from "./SalesComponent/SalesComponent";
import ShopByCategoury from "./ShopByCategoury/ShopByCategoury";
import HotSales from "./HotSales/HotSales";
import BestPicks from "./BestPicks/BestPicks";
import Deals from "./Deals/Deals";
import chatIcon from "../../Resources/Assets/img/Group 8204.svg";
import chatHeader from "../../Resources/Assets/img/Group 8205.png";
import "./Home.css";
function Home() {
  const [openChat, setOpenChat] = useState(false);
  // const [msg, setMsg] = useState("");
  // const [submitState, setSubmitState] = useState(false);
  // const array=[]


  return (
    <section className="position-relative home">
      <Navbar />
      <LandingPage />
      <ShopByCategoury />
      <HotSales />
      <BestPicks />
      <OffersComponent />
      <Deals />
      <BestSeller />
      <SalesComponent />
      <Blog />
      <Footer />
      <img
        src={chatIcon}
        alt="chatIcon"
        className="chatIcon"
        onClick={() => {
          setOpenChat(!openChat);
        }}
      />
      {openChat && (
        <div className="chat">
          <img src={chatHeader} alt="chatHeader" />
          {/* <div className="msgContainer">{submitState && msg}</div> */}
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitState(!submitState);
              array.push(...msg,msg)
              console.log(array);
            }}
          >
            <input
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
          </form> */}
        </div>
      )}
    </section>
  );
}

export default Home;
