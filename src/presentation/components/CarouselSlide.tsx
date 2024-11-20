import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Box, IconButton } from "@mui/material";

interface CarouselProps {
    children: React.ReactNode[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
    cardGridComponent: React.ReactNode;
}

export default function CarouselSlide({
                                          children: slides,
                                          autoSlide = false,
                                          autoSlideInterval = 3000,
                                          cardGridComponent
                                      }: CarouselProps) {
    const [curr, setCurr] = useState(0);
    const [opacity, setOpacity] = useState(1);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                next();
                setOpacity(1);
            }, 500);
        }, autoSlideInterval);

        return () => {
            clearInterval(slideInterval);
        };
    }, [autoSlide, autoSlideInterval]);

    return (
        <Box sx={{ position: "relative", overflow: "hidden", height: "700px" }}>
            {/* Carousel */}
            <Box
                sx={{
                    display: "flex",
                    transition: "transform 0.5s ease-out",
                    transform: `translateX(-${curr * 100}%)`,
                    width: "100%",
                    height: "560px",
                    backgroundColor: "black",
                }}
            >
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            flexShrink: 0,
                            width: "100%",
                            height: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: `url(${slide})`,
                            opacity: index === curr ? opacity : 1,
                            transition: "opacity 0.5s ease-out",
                        }}
                    />
                ))}
            </Box>

            {/* Arrows */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 2,
                    transform: "translateY(-120%)",
                }}
            >
                <IconButton
                    onClick={prev}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "gray",
                        "&:hover": { backgroundColor: "white" },
                    }}
                >
                    <ChevronLeft size={40} />
                </IconButton>
                <IconButton
                    onClick={next}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "gray",
                        "&:hover": { backgroundColor: "white" },
                    }}
                >
                    <ChevronRight size={40} />
                </IconButton>
            </Box>

            {/* Card Grid */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                }}
            >
                {cardGridComponent}
            </Box>
        </Box>
    );
}
