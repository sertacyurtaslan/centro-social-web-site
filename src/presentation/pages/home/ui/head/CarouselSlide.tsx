import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Box, IconButton, Typography } from "@mui/material";
import Type from "../../../../../theme/Type";
import { useLanguage } from '../../../../../context/LanguageContext';
import { KeyboardArrowDown } from '@mui/icons-material';

interface CarouselSlideProps {
    children: string[];
    autoSlide?: boolean;
    autoSlideInterval?: number;
    texts: {
        items: Array<{
            mainText: { pt: string; en: string };
            subText: { pt: string; en: string };
            textPlacement: string;
        }>;
    };
    cardGridComponent: React.ReactNode;
}

export default function CarouselSlide({
                                          children,
                                          autoSlide = false,
                                          autoSlideInterval = 7500,
                                          texts,
                                          cardGridComponent,
                                      }: CarouselSlideProps) {
    const { language } = useLanguage();
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
        <Box sx={{ 
            position: "relative", 
            overflow: "hidden",
            height: { 
                xs: "450px",  // Reduced height for mobile
                sm: "550px", 
                md: "700px" 
            }
        }}>
            <Box
                sx={{
                    display: "flex",
                    transition: "opacity 0.5s ease-out",
                    width: "100%",
                    height: { 
                        xs: "350px",  // Reduced height for mobile
                        sm: "450px", 
                        md: "560px" 
                    },
                    backgroundColor: "black",
                    position: "relative"
                }}
            >
                {children.map((slide, index) => (
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
                            transition: "opacity 1s ease-out",
                            "&::after": {  // Add overlay for better text readability
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0,0,0,0.3)", // Dark overlay
                            }
                        }}
                    >
                        {index === curr && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { 
                                        xs: "15%",  // Adjusted positioning for mobile
                                        sm: "20%", 
                                        md: "32%" 
                                    },
                                    left: texts.items[curr].textPlacement,
                                    transform: "translateX(-50%)",
                                    color: "white",
                                    textAlign: "center",
                                    width: { 
                                        xs: "90%",  // Narrower width on mobile
                                        sm: "80%", 
                                        md: "100%" 
                                    },
                                    padding: { 
                                        xs: "0 10px", 
                                        sm: "0 20px", 
                                        md: 0 
                                    },
                                    opacity: textVisible ? 1 : 0,
                                    transition: "opacity 0.5s ease-out",
                                    zIndex: 1, // Ensure text is above the overlay
                                }}
                            >
                                <Typography
                                    sx={{
                                        typography: Type.typography.displayLarge,
                                        fontSize: { 
                                            xs: "20px",  // Smaller font on mobile
                                            sm: "28px", 
                                            md: "45px" 
                                        },
                                        lineHeight: { 
                                            xs: 1.2,  // Tighter line height on mobile
                                            sm: 1.3, 
                                            md: 1.4 
                                        },
                                        opacity: mainTextAnimation ? 1 : 0,
                                        transform: mainTextAnimation
                                            ? "translateY(0)"
                                            : "translateY(-30px)",
                                        transition: "opacity 0.5s ease, transform 0.5s ease",
                                        textShadow: "2px 2px 4px rgba(0,0,0,0.3)", // Add shadow for better readability
                                    }}
                                >
                                    {texts.items[curr].mainText[language]}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: { 
                                            xs: "12px",  // Smaller font on mobile
                                            sm: "14px", 
                                            md: "18px" 
                                        },
                                        fontWeight: "normal",
                                        marginTop: { xs: "8px", sm: "10px" },
                                        opacity: subTextAnimation ? 1 : 0,
                                        transform: subTextAnimation
                                            ? "translateY(0)"
                                            : "translateY(-20px)",
                                        transition: "opacity 0.5s ease, transform 0.5s ease",
                                        textShadow: "1px 1px 2px rgba(0,0,0,0.3)", // Add shadow for better readability
                                    }}
                                >
                                    {texts.items[curr].subText[language]}
                                </Typography>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>

            {/* Navigation Arrows */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    right: 0,
                    display: { xs: "none", sm: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: { sm: 2, md: 3 },
                    transform: "translateY(-50%)", // Center vertically
                    zIndex: 2, // Ensure arrows are above the overlay
                }}
            >
                <IconButton
                    onClick={prev}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "gray",
                        "&:hover": { backgroundColor: "white" },
                        padding: { xs: "6px", sm: "8px", md: "12px" },
                    }}
                >
                    <ChevronLeft size={24} />
                </IconButton>
                <IconButton
                    onClick={next}
                    sx={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "gray",
                        "&:hover": { backgroundColor: "white" },
                        padding: { xs: "6px", sm: "8px", md: "12px" },
                    }}
                >
                    <ChevronRight size={24} />
                </IconButton>
            </Box>

            {/* Card Grid */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: { 
                        xs: 0,
                        sm: "15px", 
                        md: "30px" 
                    },
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100%",
                    padding: { 
                        xs: 0,
                        sm: "0 15px", 
                        md: 0 
                    },
                    display: { xs: 'none', sm: 'block' },
                    zIndex: 2,
                    '& .MuiCard-root': {
                        transition: 'all 0.3s ease-in-out',
                        position: 'relative',
                        '&:hover': {
                            transform: 'translateY(-8px) scale(1.03)',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                            '& .circle-icon': {
                                transform: 'translateX(-50%) scale(1.03)',
                            },
                            '& .arrow-icon': {
                                opacity: 1,
                                transform: 'translateY(0)',
                            },
                            '& .card-title': {
                                marginBottom: '4px'
                            }
                        }
                    },
                    '& .circle-icon': {
                        position: 'absolute',
                        top: { xs: '-15px', sm: '-30px', md: '-40px' },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        transition: 'all 0.3s ease-in-out',
                        zIndex: 2
                    },
                    '& .arrow-icon': {
                        opacity: 0,
                        transform: 'translateY(-10px)',
                        transition: 'all 0.3s ease-in-out'
                    },
                    '& .card-title': {
                        transition: 'all 0.3s ease-in-out'
                    }
                }}
            >
                {cardGridComponent}
            </Box>
        </Box>
    );
}
