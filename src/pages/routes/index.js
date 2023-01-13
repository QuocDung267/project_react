import Follwing from "../Following";
import Home from "../Home";
import Profile from "../Profile";

//public routes sondnpt00343
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Follwing },
  { path: "/profile", component: Profile },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
