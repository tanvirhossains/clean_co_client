// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// import Services from './pages/Services';
import PrivateRoute from './authentication/PrivateRoute';
import { PrivateRoutes } from './routes/PrivateRoutes';
import Dashboard from './dashboard/Dashboard';
import Admin from './authentication/Admin';



function App() {

  useEffect(() => {
    AOS.init();
  });
  return (




    <Navbar >

      <Routes>
        {
          publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))
        }
        <Route element={<PrivateRoute />}>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>

        <Route path="/dashboard" element={<Admin >
          <Dashboard />
        </Admin>}>
        </Route>



        {/* <Route path='/services' element={<PrivateRoutes>
              <Services />
            </PrivateRoutes>}> */}
        {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} /> */}

      </Routes>
    </Navbar>



  );
}

export default App;
