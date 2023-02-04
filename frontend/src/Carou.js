// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Pagination  , Autoplay} from "swiper";

export default function Carou() {
    return (
        // <div className="bg-red-500 w-1/2 h-full">
        //     <p>Loezmhhjfhjfrhjfrjh</p>
        //     <Swiper
        //         navigation={true}
        //         modules={[Navigation]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide>
        //             <img
        //                 className="object-fill w-full h-96"
        //                 src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
        //                 alt="image slide 1"
        //             />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img
        //                 className="object-fill w-full h-96"
        //                 src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
        //                 alt="image slide 2"
        //             />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img
        //                 className="object-fill w-full h-96"
        //                 src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
        //                 alt="image slide 3"
        //             />
        //         </SwiperSlide>
        //     </Swiper>


        //     <Swiper
        //         direction={"vertical"}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         modules={[Pagination]}
        //         className="mySwiper"
        //     >
        //         <SwiperSlide>
        //             <img
        //                 className="object-fill w-full h-96"
        //                 src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
        //                 alt="image slide 1"
        //             />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img
        //                 className="object-fill w-full h-96"
        //                 src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
        //                 alt="image slide 2"
        //             />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img
        //                 className="object-fill w-full h-96"
        //                 src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
        //                 alt="image slide 3"
        //             />
        //         </SwiperSlide>
        //     </Swiper>




          <div className="relative   w-1/2 m-auto  rounded-lg">
            <p>Refisse youcef</p>
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
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                    <p className="text-center">youcef</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
    




           




            </div>




       // </div>
    );
}