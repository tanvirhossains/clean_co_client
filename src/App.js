// import './App.css';
import { Route, Routes } from 'react-router-dom';
import { publicRoute } from './routes/PublicRoute';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init();
  });
  return (

    <>
      <Navbar >
        <Routes>
          {
            publicRoute.map(({ path, Component }) => (
              <Route path={path} element={<Component />}></Route>
            ))
          }
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} /> */}
        </Routes>





      </Navbar>
    </>


  );
}

export default App;
