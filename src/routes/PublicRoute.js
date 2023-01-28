import About from '../pages/About';
import Home from '../pages/home/Home';
import Login from '../pages/Login';

export const publicRoute = [
  { path: "/", name: "home", Component: Home },
  { path: "/about", name: "about", Component: About },
  { path: "/login", name: "login", Component: Login },
]