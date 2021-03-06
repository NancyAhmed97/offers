import React from "react";
import { Route, Switch } from "react-router-dom";
import Aboutus from "./Modules/Aboutus/Aboutus";
import ContactUs from "./Modules/ContactUs/ContactUs";
import Home from "./Modules/Home/Home";
import Privacy from "./Modules/privacy/privacy";
import Terms from "./Modules/Terms/Terms";
import Blogs from "./Modules/Blogs/Blogs";
import BlogDetails from "./Modules/BlogDetails/BlogDetails";
import CategouryDetails from "./Modules/CategouryDetails/CategouryDetails";
import ProductCart from "./Modules/ProductCart/ProductCart";
import SignUp from "./Modules/SignUp/SignUp";
import TrackOrder from "./Modules/TrackOrder/TrackOrder";
import TrackOrderProduct from "./Modules/TrackOrder/Coponents/TrackOrderContainer/TrackOrderContainer";
import ForgetPassword from "./Modules/ForgetPassword/ForgetPassword";
import ResetPassword from "./Modules/ResetPassword/ResetPassword";
import BillingContainer from "./Modules/BillingContainer/BillingContainer";
import PaymentContainer from "./Modules/PaymentContainer/PaymentContainer";
import CartContainer from "./Modules/CartContainer/CartContainer";
import WishList from "./Modules/WishList/WishList";
import Auction from "./Modules/Auction/Auction";
import { useSelector } from "react-redux";
function Routes() {
  var { auth } = useSelector((state) => state);
  var authState = Object.keys(auth.authorization).length;
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/terms" render={() => <Terms />} />
          <Route path="/privacy" render={() => <Privacy />} />
          <Route path="/contactus" render={() => <ContactUs />} />
          <Route path="/aboutus" render={() => <Aboutus />} />
          <Route path={"/blogs" || "/blogs/:id"} render={() => <Blogs />} />
          <Route path="/blogDetails/:id" render={() => <BlogDetails />} />
          <Route
            path={"/CategouryDetails" || "/CategouryDetails/:id"}
            render={() => <CategouryDetails />}
          />
          <Route path="/productcart/:id" render={() => <ProductCart />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route
            path="/trackorder"
            render={() => (authState !== 0 ? <TrackOrder /> : <SignUp />)}
          />
          <Route
            path="/trackorderproducts/:id"
            render={() =>
              authState !== 0 ? <TrackOrderProduct /> : <SignUp />
            }
          />
          <Route path="/forgetpassword" render={() => <ForgetPassword />} />
          <Route
            path="/billing"
            render={() => (authState !== 0 ? <BillingContainer /> : <SignUp />)}
          />
          <Route
            path="/payment"
            render={() => (authState !== 0 ? <PaymentContainer /> : <SignUp />)}
          />
          <Route
            path="/cart"
            render={() => (authState !== 0 ? <CartContainer /> : <SignUp />)}
          />
          <Route
            path="/Resetpaaword/:pram1/:parm2"
            render={() => <ResetPassword />}
          />
          <Route
            path="/wishlist"
            render={() => (authState !== 0 ? <WishList /> : <SignUp />)}
          />
          <Route
            path="/auction/:id"
            render={() => (authState !== 0 ? <Auction /> : <SignUp />)}
          />
        </Switch>
      )}
    />
  );
}

export default Routes;
