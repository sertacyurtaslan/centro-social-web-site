import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Box, IconButton, Typography } from "@mui/material";
import Type from "../../../../../theme/Type";

interface CarouselProps {
    children: React.ReactNode[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
    texts: { mainText: string; subText: string, textPlacement: string }[];
    cardGridComponent: React.ReactNode;
}

export default function CarouselSlide({
                                          children,
                                          autoSlide = false,
                                          autoSlideInterval = 7500,
                                          texts,
                                          cardGridComponent,
                                      }: CarouselProps) {
    const [curr, setCurr] = useState(0);
    const [mainTextAnimation, setMainTextAnimation] = useState(false);
    const [subTextAnimation, setSubTextAnimation] = useState(false);
    const [textVisible, setTextVisible] = useState(true);
    const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);

    const prev = () => {
        setCurr((prev) => (prev === 0 ? children.length - 1 : prev - 1));
        restartAutoSlide();
    };

    const next = () => {
        setCurr((prev) => (prev === children.length - 1 ? 0 : prev + 1));
        restartAutoSlide();
    };

    const startAutoSlide = () => {
        if (!autoSlide) return;
        slideIntervalRef.current = setInterval(() => {
            setTextVisible(false);
            setTimeout(() => {
                setCurr((prev) => (prev === children.length - 1 ? 0 : prev + 1));
                setTextVisible(true);
            }, 300);
        }, autoSlideInterval);
    };

    const stopAutoSlide = () => {
        if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
    };

    const restartAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    useEffect(() => {
        setMainTextAnimation(false);
        setSubTextAnimation(false);
        setTextVisible(false);

        setTimeout(() => {
            setTextVisible(true);
            setMainTextAnimation(true);
            setTimeout(() => {
                setSubTextAnimation(true);
            }, 1000);
        }, 500);
    }, [curr]);

    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide();
    }, [autoSlide, autoSlideInterval]);

    return (
        <Box sx={{ position: "relative", overflow: "hidden", height: "700px" }}>
            {/* Carousel Container */}
            <Box
                sx={{
                    display: "flex",
                    transition: "opacity 0.5s ease-out",
                    width: "100%",
                    height: "560px",
                    backgroundColor: "black",
                    position: "relative"
                }}
            >
                {children.map((slide, index, ) => (
                    <Box
                        key={index}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: `url(${slide})`,
                            opacity: index === curr ? 1 : 0,
                            transition: "opacity 1s ease-out"
                        }}
                    >
                        {index === curr && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "32%",
                                    left: texts[curr].textPlacement,
                                    transform: "translateX(-50%)",
                                    color: "white",
                                    textAlign: "center",
                                    width: "100%",
                                    opacity: textVisible ? 1 : 0,
                                    transition: "opacity 0.5s ease-out",
                                }}
                            >
                                <Typography
                                    sx={{
                                        typography: Type.typography.displayLarge,
                                        fontSize: "45px",
                                        opacity: mainTextAnimation ? 1 : 0,
                                        transform: mainTextAnimation
                                            ? "translateY(0)"
                                            : "translateY(-30px)",
                                        transition: "opacity 0.5s ease, transform 0.5s ease",
                                    }}
                                >
                                    {texts[curr].mainText}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        top: "60px",
                                        fontSize: "18px",
                                        fontWeight: "normal",
                                        marginTop: "10px",
                                        opacity: subTextAnimation ? 1 : 0,
                                        transform: subTextAnimation
                                            ? "translateY(0)"
                                            : "translateY(-20px)",
                                        transition: "opacity 0.5s ease, transform 0.5s ease",
                                    }}
                                >
                                    {texts[curr].subText}
                                </Typography>
                            </Box>
                        )}
                    </Box>
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

            {/* Kart Grid */}
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
