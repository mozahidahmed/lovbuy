"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const TrustedPartners = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const PartnersData = [
        {
            imageURL: 'https://i.ibb.co/Tg1wwjx/amcrest.png',
            alt: "amcrest"
        },
        {
            imageURL: 'https://i.ibb.co/SxrChkV/Anker.png',
            alt: "anker"
        },
        {
            imageURL: 'https://i.ibb.co/khcSQQG/aspen.png',
            alt: "aspen"
        },
        {
            imageURL: 'https://i.ibb.co/bXJV1vT/Foscam.png',
            alt: "foscam"
        },
        {
            imageURL: 'https://i.ibb.co/T03CbcY/HS.png',
            alt: "hs"
        },
        {
            imageURL: 'https://i.ibb.co/jz5tZ7r/keeva.png',
            alt: "keeva"
        },
        {
            imageURL: 'https://i.ibb.co/kXnCfdL/Active8.png',
            alt: "active8"
        },
        {
            imageURL: 'https://i.ibb.co/r7gDsQQ/Bullseye.png',
            alt: "bullseye"
        },

    ];
    return (
        <div className='w-full h-full md:px-10 mx-auto'>

            <h3 className="text-3xl md:text-4xl text-gray-700 text-center font-bold pb-10">Our Trusted Partners</h3>


            <div className="">
                <Slider className='' {...settings}>
                    {
                        PartnersData?.map((item) => {
                            return (
                                <div key={item.alt} className="pt-10 d-flex justify-content-center align-items-center gap-5">
                                    <div style={{ position: 'relative', width: '150px', height: '150px', }} className="d-flex justify-content-center mx-auto">
                                        <Image
                                            className='d-flex grayscale hover:grayscale-0 justify-content-center align-items-center '
                                            src={item?.imageURL}
                                            title={item?.alt}
                                            alt={item?.alt}
                                            height={250}
                                            width={400}
                                        />
                                    </div>
                                </div>

                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default TrustedPartners;