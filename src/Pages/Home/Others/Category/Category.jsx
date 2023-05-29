import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="my-20 max-w-screen-xl mx-auto">
            <SectionTitle
            subHeading={'From 11:00am to 10:00pm'}
            heading={'ORDER ONLINE'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide className="relative border">
                    <img src={slide1} alt="slider" className="w-full h-full object-contain" />
                    <div className="absolute inset-x-1/2 flex justify-center  bottom-0 -translate-y-1/2">
                        <h3 className="text-4xl uppercase  text-white bottom-5">Salads</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative border">
                    <img src={slide2} alt="slider" className="w-full h-full object-contain" />
                    <div className="absolute inset-x-1/2 flex justify-center  bottom-0 -translate-y-1/2">
                        <h3 className="text-4xl uppercase  text-white bottom-5">Pizzas</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative border">
                    <img src={slide3} alt="slider" className="w-full h-full object-contain" />
                    <div className="absolute inset-x-1/2 flex justify-center  bottom-0 -translate-y-1/2">
                        <h3 className="text-4xl uppercase  text-white bottom-5">Soups</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative border">
                    <img src={slide4} alt="slider" className="w-full h-full object-contain" />
                    <div className="absolute inset-x-1/2 flex justify-center  bottom-0 -translate-y-1/2">
                        <h3 className="text-4xl uppercase  text-white bottom-5">Dessert</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative border">
                    <img src={slide5} alt="slider" className="w-full h-full object-contain" />
                    <div className="absolute inset-x-1/2 flex justify-center  bottom-0 -translate-y-1/2">
                        <h3 className="text-4xl uppercase  text-white bottom-5">Salads</h3>
                    </div>
                </SwiperSlide>

                

            </Swiper>
        </section>
    );
};

export default Category;