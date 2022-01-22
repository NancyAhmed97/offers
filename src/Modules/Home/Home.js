import React from "react";
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

function Home() {
  return (
    <section>
      <Navbar />
      <LandingPage />
      <ShopByCategoury/>
      <HotSales />
      <BestPicks />
      <OffersComponent />
      <Deals />
      <BestSeller />
      <SalesComponent />
      <Blog />
      <Footer />

      {/* <Items />
    
      <SalesComponent />
      <Blog />
      <Footer /> */}
    </section>
  );
}

export default Home;
