import { Route, Routes } from "react-router-dom";
import Apartement from "./Apartement";
import Inscription from "./Inscription";
import Main from "./Main";
import data from './Data';
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
import Home from "./Home";
import Carou from "./Carou";
import CreerAnnonce from "./CreerAnnonce";
import Login from "./Login";
import MapsGoogle from "./MapsGoogle";
import SignIn from "./SignIn";
import UserInformations from "./UserInformations";
import Contact from "./Contact";
  

function App() {
  return(
    <Routes>
      <Route path="/user" element={<Main/>}/>
      <Route path="/apartement" element={<Apartement property={data}/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      
      <Route path="/navbar2" element={<NavBar2/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/swiper" element={<Carou/>}/>
      <Route path="/creer" element={<CreerAnnonce/>}/>
      <Route path="/log" element={<Login/>}/>
      <Route path="/map" element={<MapsGoogle/>}/>
      <Route path="/userinfo" element={<UserInformations/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App;     

  
