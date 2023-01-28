// import { Component } from 'react';

import About from '../pages/About';
import Contact from '../pages/Contact';
// import Contact from '../pages/Home';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import Services from '../pages/Services';


export const publicRoute = [
    { path: "/", name: "home", Component: Home },
    { path: "/about", name: "about", Component: About },
    { path: "/login", name: "login", Component: Login },
    { path: "/contact", name: "contact", Component: Contact },
    { path: "/services", name: "services", Component: Services }
  ]