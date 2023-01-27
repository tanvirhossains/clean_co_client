// import './App.css';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (

    <>
      <Navbar >
        <Routes>

          
        </Routes>
        <Home />
        <About/>
        <Contact/>
        <Login/>

      </Navbar>
    </>


  );
}

export default App;
