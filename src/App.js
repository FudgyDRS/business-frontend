import React, { Suspense, Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
//import NavScrollTop from "./components/nav-scroll-top";
//import HomePage from "./pages/index";
//import AboutPage from "./pages/about";
//import ServicePage from "./pages/service";
//import ServiceDetails from "./templates/service-details";
//import TeamPage from "./pages/team";
//import FaqPage from "./pages/faq";
//import BlogPage from "./pages/blog";
//import BlogLeftSidebarPage from "./pages/blog-left-sidebar";
//import BlogRightSidebarPage from "./pages/blog-right-sidebar";
//import BlogDetailsPage from "./templates/blog-details";
//import BlogAuthor from "./templates/blog-author";
//import BlogDate from "./templates/blog-date";
//import BlogTag from "./templates/blog-tag";
//import BlogCategory from "./templates/blog-category";
//import ContactPage from "./pages/contact";
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/css/vendor/metropolis.css";
import "./assets/css/vendor/icofont.min.css";
import "./assets/css/vendor/fontawesome.css";
import "./assets/css/vendor/material-design-iconic.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/scss/style.scss";
//import "node_modules\swiper\swiper.scss";
//node_modules\swiper\modules\navigation\navigation.scss

import { createTheme } from "src/theme";
import { ThemeProvider } from "@material-ui/core";
import { routes } from "src/routes";
import AuthGuard from "src/component/AuthGuard";
import PageLoading from "src/component/PageLoading";

const App = () => {
  const theme = createTheme();
  console.log(theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <RenderRoutes data={routes} />
      </ThemeProvider>
    </div>
  );
}

function RenderRoutes(props) {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {props.data.map((route, i) => {
          const Component = route.component;
          const Guard = route.guard ? AuthGuard : Fragment;
          const Layout = route.layout || Fragment;
          return (
            <Route
              exact={route.exact}
              key={i} 
              path={route.path}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      <RenderRoutes data={route.routes} />
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}

/* const App = () => {
  return (
    <Router>
      <NavScrollTop>
        <Switch>
          <Route
            path={`${"/"}`}
            exact
            component={HomePage}
          />
          <Route
            path={`${"/about"}`}
            component={AboutPage}
          />
          <Route
            path={`${"/service"}`}
            component={ServicePage}
          />
          <Route
            path={`${"/service-details/:id"
              }`}
            component={ServiceDetails}
          />
          <Route
            path={`${"/team"}`}
            component={TeamPage}
          />
          <Route
            path={`${"/faq"}`}
            component={FaqPage}
          />
          <Route
            path={`${"/contact"}`}
            component={ContactPage}
          />
          <Route
            path={`${"/blog"}`}
            component={BlogPage}
          />
          <Route
            path={`${"/blog-left-sidebar"
              }`}
            component={BlogLeftSidebarPage}
          />
          <Route
            path={`${"/blog-right-sidebar"
              }`}
            component={BlogRightSidebarPage}
          />
          <Route
            path={`${"/blog-details/:id"}`}
            component={BlogDetailsPage}
          />
          <Route
            path={`${"/author/:author"}`}
            component={BlogAuthor}
          />
          <Route
            path={`${"/date/:date"}`}
            component={BlogDate}
          />
          <Route
            path={`${"/tag/:slug"}`}
            component={BlogTag}
          />
          <Route
            path={`${"/category/:slug"}`}
            component={BlogCategory}
          />
        </Switch>
      </NavScrollTop>
    </Router>
  );
}; */

export default App;
