import React from "react";

import image1 from "./bill02.png";
import image2 from "./bill02.png";
import image3 from "./bill02.png";
import image4 from "./bill02.png";
import image5 from "./bill02.png";
import image6 from "./bill02.png";
import LoginBtn from "./a.png";
import bgfirst from "./a.png";
import Footer from "./Footer";
import NavBar2 from "./NavBar2";
import Nav from "./Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { Pagination  , Autoplay} from "swiper";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
function Home() {

  return (
       
     
      
      <div className="bg-slate-300 w-full h-full text-white">
      <Nav/>
        <div className="relative w-full h-[900px]" id="home" >
          <img
            src={bgfirst}
            className="h-5/6 w-full object-cover curved shadow-lg shadow-darkBlue-100"
          />
          <div className="absolute top-1/4 md:ml-36 ml-7">
            <p className="font-mono md:text-5xl text-2xl font-semibold  md:leading-[50px] leading-6 mb-8 text-light">
              Découvrir
              <br />
              Des Biens 
              <br />
              Compatibles
            </p>
            <p className="text-light font-sans md:text-2xl font-semibold text-white md:leading-[3rem] leading-5 mb-6">
              Trouver des biens compatibles pour vous
              <br />
              facilement , éfficacement , oublier tous difficulties pour trouver
              <br />
              une residence pour vous
              
            </p>
           
          </div>
        </div>
       

         
<div className="relative   w-1/3 m-auto  rounded-lg mb-20 ">
<p className="font-mono md:text-5xl text-3xl font-semibold text-white text-center mb-20">
                Notre équipe
              </p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-3xl"
            >
                <SwiperSlide>
                <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-80">
              <img
                src={image1}
                alt="member"
                className="rounded-t-xl w-full h-full"
              />
              <p className="text-light font-mono text-2xl  text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
                Refisse
                <br />
                Youcef
              </p>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-80">
              <img
                src={image2}
                alt="member"
                className="rounded-t-xl w-full h-full"
              />
              <p className="text-light font-mono text-2xl  text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
              Yahi
                <br />
                Islam
              </p>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                   
                    <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-80">
              <img
                src={image3}
                alt="member"
                className="rounded-t-xl w-full h-full"
              />
              <p className="text-light font-mono text-2xl text-white  text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
              Raid
                <br />
                Bourzam
              </p>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-80">
              <img
                src={image4}
                alt="member"
                className="rounded-t-xl w-full h-full"
              />
              <p className="text-light font-mono text-2xl  text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
                Zitouni
                <br />
                Meriem
              </p>
            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="bg-[#279EB4] col-span-5 lg:col-span-2 rounded-xl shadow-2xl shadow-darkBlue-100 relative h-80">
              <img
                src={image5}
                alt="member"
                className="rounded-t-xl w-full h-full"
              />
              <p className="text-light font-mono text-2xl  text-center rounded-b-xl absolute bottom-0 left-0 right-0 h-1/4">
              Zerrouki
                <br />
                Ikram
              </p>
            </div>
                </SwiperSlide>
                
               
            </Swiper>
            </div>

    <Footer  />

      </div>









  
      
  
  );
}

export default Home;



