import React from "react";
import { Route, Switch } from "react-router-dom";
import Aboutus from "./Modules/Aboutus/Aboutus";
import ContactUs from "./Modules/ContactUs/ContactUs";
import Home from "./Modules/Home/Home";
// import Privacy from "./Modules/privacy/Privacy";
import Privacy from "./Modules/privacy/privacy"
import Terms from "./Modules/Terms/Terms";
import Blogs from "./Modules/Blogs/Blogs";
import BlogDetails from "./Modules/BlogDetails/BlogDetails";
function Routes() {
  return (
    <Route
      render={({ location }) => (
        <Switch location={location}>
          <Route exact path="/" render={() => <Home />} />
          <Route  path="/terms" render={() => <Terms />} />
          <Route  path="/privacy" render={() => <Privacy />} />
          <Route  path="/contactus" render={() => <ContactUs />} />
          <Route  path="/aboutus" render={() => <Aboutus />} />
          <Route  path="/blogs" render={() => <Blogs />} />
          <Route  path="/blogDetails" render={() => <BlogDetails />} />
                  </Switch>
      )}
    />
  );
}

export default Routes;
