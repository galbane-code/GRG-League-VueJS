import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/currentStage",
    name: "currentStage",
    component: () => import("./pages/CurrentStage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/About")
  },
  {
    path: "/favoriteGames",
    name: "favoriteGames",
    component: () => import("./pages/FavoriteGamesPage")
  },
  {
    path: "/teamPage/:teamName",
    name: "teamPage",
    component: () => import("./pages/TeamPage")
  },
  {
    path: "/ProfilePage",
    name: "ProfilePage",
    component: () => import("./pages/ProfilePage")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
