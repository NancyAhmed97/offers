import React, { useEffect, useState } from "react";
import Footer from "../Common/Footer/Footer";
import BestSeller from "./BestSeller/BestSeller";
import Navbar from "../Common/Navbar/Navba";
import LandingPage from "./LandingPage/LandingPage";
import OffersComponent from "./OffersComponent/OffersComponent";
import Blog from "./OurBlog/Blog";
import SalesComponent from "./SalesComponent/SalesComponent";
import ShopByCategoury from "./ShopByCategoury/ShopByCategoury";
import HotSales from "./HotSales/HotSales";
import BestPicks from "./BestPicks/BestPicks";
import Deals from "./Deals/Deals";
import "./Home.css";
import axios from "axios";
import { useSelector } from "react-redux";
function Home() {
  var { auth } = useSelector((state) => state);
  // const [msg, setMsg] = useState("");
  // const [submitState, setSubmitState] = useState(false);
  const [sliders, setSliders] = useState([]);
  const [bestPicks, setBestPicks] = useState([]);
  const [banner, setBanner] = useState([]);
  const [hotSales, setHotSales] = useState();
  const [popular, setPopular] = useState([]);
  const [besSeller, setBestSeller] = useState([]);
  const [bolgs, setBlogs] = useState([]);
  // const array=[]
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/home`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },

    }).then((res) => {
      if (res.data.success === true) {
        console.log(res.data.data.banners);
        setBlogs(res.data.data.blogs);
        setSliders(res.data.data.sliders);
        setHotSales(res.data.data.hot_sales);
        setBestPicks(res.data.data.best_picks);
        setBanner(res.data.data.banners);
        setPopular(res.data.data.popular_items);
        setBestSeller(res.data.data.best_seller);
      }
    });
    if (Object.keys(auth.authorization).length !== 0) {
      // axios({
      //   method: "get",
      //   url: `https://offers.com.fig-leaf.net/api/v1/favorites`,
      //   headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      // }).then((res) => {
      //   if (res.data.success === true) {
      //     console.log(res.data.data.items);
      //     setLikeItems(res.data.data.items);
      //   }
      // });
    }
  }, [auth.authorization]);

  return (
    <section className="position-relative home">
      <Navbar />
      <LandingPage sliders={sliders}  />
      <ShopByCategoury />
      <HotSales hotSales={hotSales}  />
      <BestPicks bestPicks={bestPicks} />
      <OffersComponent banner={banner} />
      <Deals popular={popular} />
      <BestSeller besSeller={besSeller} />
      <SalesComponent banner={banner} />
      <Blog bolgs={bolgs}  />
      <Footer />


  
    </section>
  );
}

export default Home;
