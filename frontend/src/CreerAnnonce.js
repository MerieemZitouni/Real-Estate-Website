import React, { useEffect  } from "react";
import backgroundImage from "./bg.png";
import NavBar from "./NavBar2";
import { useState } from "react";
import AjouterImage from "./AjouterImage";
import Nav02 from "./Nav02";
import {
  Autocomplete,
  TextField,
  Stack,
  Box,
  FormControl,
  InputLabel,
  MenuItem , 
  Select , 
  Typography , 
  Rating ,
  StyledRating , 
  FavoriteBorderIcon , 
  FavoriteIcon,
  Button
  
} from "@mui/material";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';



function CreerAnnonce() {
  const [images, setImages] = useState([]);
  

   
const [icone, setIcone] = useState(<FaArrowDown />);
const [user, setUser] = useState("hidden");
const [value, setValue] = useState("hidden");
const [prix, setPrix] = useState(0);  
const [adresse, setAdresse] = useState("");
const [typeAnnonce, seTypeAnnonce] = useState("hidden");
const [natureBien, setNatureBien] = useState(<FaArrowDown />);
const [surface, setSurface] = useState(<FaArrowDown />);
const [description, setDescription] = useState("hidden");









  return (
    <div style=  {{ backgroundImage: `url(${backgroundImage})` }}
    className="bg-gradient-to-r from-bleu to-green text-white w-full h-full bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center pt-32"
    >
      <Nav02/>
    


    <div className="  text-black m-3  rounded-2xl py-8 px-8 "
    >
    <div className="  text-black m-3  rounded-2xl py-8 px-8 shadow-md shadow-slate-500  bg-white  "
    style={{ backgroundImage: `url(${backgroundImage})` }}
    //className="bg-gradient-to-r from-bleu to-green text-white w-full h-full bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center pt-32"
    >
      {" "}
      <h1 className="text-2xl lg:text-4xl">Deposer une annonce </h1>
      <div className="flex justify-between mt-4">
        <div className="lg:w-3/4 ">
          
        <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          onChange={(event, newValue) => {
                             setDescription(newValue);
                           }}
        />


        </div>
        <div className="flex space-x-5 sm:ml-4  ">
          <button
            className=" text-sm lg:text-xl text-white p-2  self-center  rounded-xl bg-slate-300 inline-block  p-auto"
            onClick={() => {
              setUser("active");
              if (user === "visible") {
                console.log("more");
                setIcone(<FaArrowDown />);

                setUser("hidden");
               } else {
                setIcone(<FaArrowUp />);
                setUser("visible");
              }
            }}
          >
            {icone}
          </button>
         
        </div>
      </div>
      <div className="mt-10  ">
        <div
          className={`${user}   grid grid-cols-2  lg:grid-cols-2  gap-4 gap-y-6 lg:gap-x-20  flex  `}
        >
          <div className=" ">
           

          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Type annonce</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    label="Type annonce"
    id="demo-simple-select"
    //value={typeAnnonce}
    
    onInputChange={(event) => {
                       seTypeAnnonce(event.value);

                     }}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>



         </div>
           <div className="  ">
             
           
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Nature du bien</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    label="Nature du bien"
    id="demo-simple-select"
   // value={natureBien}
    
    onInputChange={(event, newValue) => {
                      setNatureBien(newValue);
                     }}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>


          </div>
          <div className="   ">
           

          <TextField fullWidth
          id="outlined-number"
          label="Surface"
          type="number"
          
          onChange={(event, newValue) => {
                             setSurface(newValue);
                           }}
        />

          </div>
          <div className="   ">
            
          <TextField fullWidth
          id="outlined-number"
          label="Prix"
          type="number"
         
          onChange={(event, newValue) => {
                          setPrix(newValue);
                           }}
        />

            {/* </Stack> */}
          </div>
          <div className="  ">
            

          <Typography component="legend">Etat du bien </Typography>
<Rating
  name="simple-controlled"
  value={value}
  max={10}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>


          </div>
          <div className="  ">
            

          <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Adresse"
          multiline
          maxRows={4}
          onChange={(event, newValue) => {
                             setAdresse(newValue);
                           }}
        />

          </div>
        </div>
      </div>
      
    </div>
    <div 
     className=" text-black m-3  rounded-2xl py-8 px-8 shadow-md shadow-slate-500  bg-white  "
     style={{ backgroundImage: `url(${backgroundImage})` }}>
     
    
     <h1 className="text-2xl lg:text-4xl mb-12">Choisir photo </h1>
    <AjouterImage images={images} setImages={setImages}/>
    
    </div>
     
   <div className="flex justify-center mt-12">
   <Button variant="contained" size="large"  >
        <p className="p-4 text-3xl"> creer</p>  
        </Button>
        </div>
  </div>



  </div>



  );
}


export default CreerAnnonce;




