'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function ClientSwiper({ images }) {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                loop={true}
            >
                {
                    images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className='h-[600px] w-full'>
                                {/* <Image src={image} alt={`Product image ${index + 1}`} fill={true} style={{objectFit:'cover'}} unoptimized/> */}
                                <img src={image}  alt={`Product image ${index + 1}`} className='h-full w-full object-fill' />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
