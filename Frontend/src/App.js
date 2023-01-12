import { Route, Routes } from "react-router-dom";
import Apartement from "./Apartement";
import Inscription from "./Inscription";
import Main from "./Main";
import data from './Data';


function App() {
  return(
    <Routes>
      <Route path="/" element={<Inscription/>}/>
      <Route path="/user" element={<Main/>}/>
      <Route path="/apartement" element={<Apartement property={data}/>}/>
    </Routes>
  )
}

export default App;


