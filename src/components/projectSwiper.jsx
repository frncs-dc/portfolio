"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";

import Image from "next/image";

export default function ProjectSwiper() {
    const projects = [
        {
            title: "PisoCAKE",
            description:
                "A Progressive Web Application (PWA) for financial goal management.",
            image: "/Projects/PisoCAKE/Landing Page.png",
        },
        {
            title: "Food Storage",
            description: "A web application for food storage management.",
            image: "/Projects/Food Storage/Cart Family Cart/Merged View.png",
        },
        {
            title: "TellTail Tasks",
            description: "A task management application.",
            image: "/Projects/TellTail Tasks/TellTail Tasks - 1.png",
        },
        {
            title: "Inventory System",
            description: "A inventory management system.",
            image: "/Projects/Motorcycle/Dashboard expanded sidebar.png",
        },
        {
            title: "Spotfinder",
            description: "A parking slot management platform.",
            image: "/Projects/Spotfinder/Home Page - with Login.png",
        },
    ];
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full overflow-hidden rounded-2xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 400px, 80vw"
                                priority={index === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
