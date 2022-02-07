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
import ResponsiveDrawer from "./Modules/ResponsiveDrawer";
function Routes() {
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/terms" render={() => <Terms />} />
          <Route path="/privacy" render={() => <Privacy />} />
          <Route path="/contactus" render={() => <ContactUs />} />
          <Route path="/aboutus" render={() => <Aboutus />} />
          <Route path="/blogs" render={() => <Blogs />} />
          <Route path="/blogDetails/:id" render={() => <BlogDetails />} />
          <Route
            path="/CategouryDetails/:id"
            render={() => <CategouryDetails />}
          />
          <Route path="/productcart" render={() => <ProductCart />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/trackorder" render={() => <TrackOrder />} />
          <Route path="/trackorderproducts" render={() => <TrackOrderProduct />} />
          <Route path="/forgetpassword" render={() => <ForgetPassword />} />
          <Route path="/billing" render={() => <BillingContainer />} />
          <Route path="/payment" render={() => <PaymentContainer />} />
          <Route path="/cart" render={() => <CartContainer />} />
          <Route path="/Resetpaaword/:pram1/:parm2" render={() => <ResetPassword />} />
          <Route path="/test" render={()=><ResponsiveDrawer />} />
          <Route path="/wishlist" render={() => <WishList />} />
        </Switch>
      )}
    />
  );
}

export default Routes;
