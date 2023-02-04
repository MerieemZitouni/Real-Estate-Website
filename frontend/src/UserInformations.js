import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import backgroundImage from "./bg.png";
import Nav02 from "./Nav02";
export default function UserInformations({ user, userNameActual }) {
  console.log("from userInformations ", user);

  return (
    <div  style=  {{ backgroundImage: `url(${backgroundImage})` }}
    //className="bg-gradient-to-r from-bleu to-green text-white w-full h-full bg-no-repeat bg-cover bg-center bg-fixed flex items-center justify-center pt-32"
    >
      <div className="App  " style={{ height: "100vh" }}>
        <div className="flex" style={{ height: "100vh" }}>
          <Nav02 />
          <div
            style={{ height: "100vh" }}
            className="scrollbar w-full overflow-auto "
          >
           

            <div className="  pt-32  ">
              
              <div className="lg:w-1/2 sm:w-5/6 text-blue-500  my-auto self-center mx-auto text-xl font-serif p-6 rounded-xl shadow-md shadow-black space-y-6 bg-gradient-to-b from-blue-300 to-blue-400">
                <h1 className="text-4xl text-center text-purple-700">
                  Fiche d'informations{" "}
                </h1>
                <div className="grid grid-cols-2 gap-6">
                  <TextField
                    focused
                    color="secondary"
                    id="outlined-read-only-input"
                    label="Name"
                    defaultValue={"Refisse"}//user.name
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    color="secondary"
                    focused
                    id="outlined-read-only-input"
                    label="Prénom"
                    defaultValue={"Youcef"}//user.prenom
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    color="secondary"
                    focused
                    id="outlined-read-only-input"
                    label="Email"
                    defaultValue={"ky_refisse@esi.dz"}//user.email
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    color="secondary"
                    focused
                    id="outlined-read-only-input"
                    label="Numero de telephone"
                    defaultValue={"0698048172"}//user.phone
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
                <div>
                  <TextField
                    color="secondary"
                    focused
                    fullWidth
                    id="outlined-read-only-input"
                    label="poste de travaille "
                    defaultValue={"Etudiant"}//user.occupation
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-6 ">
                  <TextField
                    color="secondary"
                    focused
                    id="outlined-read-only-input"
                    label="Role"
                    defaultValue={
                    //   user.role == 0
                    //     ? "admin"
                    //     : user.role == 1
                    //     ? "gestionnaire"
                    //     : "simple utilisateur"
                    "simple utilisateur"
                    }
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    color="secondary"
                    focused
                    id="outlined-read-only-input"
                    label="Etat"
                   // defaultValue={user.deleted == true ? "desactivé" : "activé"}
                   defaultValue={ "activé"}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}