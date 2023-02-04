import React from "react";
import backgroundImage from "./bg.png";
import { TextField , Button } from "@mui/material";
import Nav02 from "./Nav02";

function Contact (){
    return (
        <>
        <Nav02></Nav02>
        <div style=  {{ backgroundImage: `url(${backgroundImage})` }} className="h-[760px] pt-16"  >
        <form style=  {{ backgroundImage: `url(${backgroundImage})` }} className="shadow-xl shadow-slate-500 lg:w-1/3 md:1/2 m-auto p-12 rounded-3xl grid grid-col-3 gap-y-10">
            <h1 className="mb-10 text-3xl text-center font-bold">Contact Us </h1>
            <TextField fullWidth
          id="outlined-email"
          label="Your email"
          type="email"
          
         
        />
        <TextField fullWidth
          id="outlined-subject"
          label="Your Subject"
          type="text"
          
         
        />
   <TextField fullWidth
          id="outlined-message"
          label=" Your Message"
          multiline
          rows={4}
          
        />
      <Button type="submit" variant="contained" size="large"  >
        <p className="p-3 text-3xl"> submit</p>  
        </Button>
   </form>
   
   </div>
   </>
    )
}

export default Contact ;