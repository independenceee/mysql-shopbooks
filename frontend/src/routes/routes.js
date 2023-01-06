import config from "../configs";

import Home from "../pages/Home";
import Update from "../pages/Update";
import Add from "../pages/Add";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.add, component: Add },
  { path: config.routes.update, component: Update },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
