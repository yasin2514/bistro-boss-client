import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

const TestiMonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='mb-20'>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews && reviews.map(reviews => (<SwiperSlide
                        key={reviews._id}
                    >
                        <div className='mx-24 flex flex-col items-center gap-6'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={reviews.rating}
                                readOnly
                            />
                            <p>{reviews.details}</p>
                            <h3 className='text-2xl text-orange-400 '>{reviews.name}</h3>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </section>
    );
};

export default TestiMonials;