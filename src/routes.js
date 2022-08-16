import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout";
import MintLayout from "src/layouts/MintLayout";
import MintLayout2 from "src/layouts/MintLayout2";
import Layout from "src/layouts";

export const routes = [
  {
    exact: true,
    path: "/",
    layout: Layout,
    component: lazy(() => import("src/views/pages/Home")),
  },
  
  {
    exact: true,
    path: "/",
    layout: Layout,
    component: lazy(() => import("src/pages/index")),
  },

  {
    exact: true,
    path: "/about",
    layout: Layout,
    component: lazy(() => import("./pages/about")),
  },

  {
    exact: true,
    path: "/service",
    layout: Layout,
    component: lazy(() => import("./pages/service")),
  },

  {
    exact: true,
    path: "/service-details",
    layout: Layout,
    component: lazy(() => import(`${"./pages/service-details/:id"}`)),
  },

  {
    exact: true,
    path: "/team",
    layout: Layout,
    component: lazy(() => import("./pages/team")),
  },

  {
    component: () => <Redirect to="/404" />,
  },
];
