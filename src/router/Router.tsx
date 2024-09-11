import { createBrowserRouter, RouteObject } from "react-router-dom";

interface RouteModule {
  default: RouteObject[];
}

// autoload routes
const modules = import.meta.glob("./routes/*.tsx", { eager: true });

const routes: RouteObject[] = Object.entries(modules).flatMap(([, module]) => {
  const routeModule = module as RouteModule;
  if (Array.isArray(routeModule.default)) {
    return routeModule.default;
  } else {
    console.warn('Invalid route module format:', routeModule);
    return [];
  }
});

export const router = createBrowserRouter(routes);

export default router;