import Follwing from "../Following";
import Home from "../Home";

//public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/follwing", component: Follwing },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
