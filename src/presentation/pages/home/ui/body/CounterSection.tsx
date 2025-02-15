import React, { useState, useRef, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import CounterItem from "./CounterItem";
import backgroundImg from '../../../../../assets/img/background/countup-bg-img.jpg';
import { Features } from "../../../../../assets/features/Features";
import Type from "../../../../../theme/Type";
import { useLanguage } from '../../../../../context/LanguageContext';

const CounterSection: React.FC = () => {
    const { language } = useLanguage();
    const [isInView, setIsInView] = useState(false);
    const counterSectionRef = useRef<HTMLDivElement>(null);

    // Observer to check when the section is in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);  // Trigger counter animation when in view
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (counterSectionRef.current) {
            observer.observe(counterSectionRef.current);
        }

        return () => {
            if (counterSectionRef.current) {
                observer.unobserve(counterSectionRef.current);
            }
        };
    }, []);

    return (
        <Box
            ref={counterSectionRef}
            sx={{
                py: { xs: 4, sm: 6, md: 9 },
                pb: { xs: 4, sm: 6, md: 8 },
                height: { xs: 'auto', sm: '500px' },
                minHeight: { xs: '600px', sm: '500px' },
                backgroundImage: `url(${backgroundImg || 'default-background.jpg'})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: { xs: "scroll", sm: "fixed" },
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1
                }
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 2 }}>
                <Box 
                    textAlign="center" 
                    mb={{ xs: 4, sm: 5, md: 7 }}
                    px={{ xs: 2, sm: 0 }}
                >
                    <Typography 
                        color="white" 
                        sx={{ 
                            typography: Type.typography.headlineExtra,
                            fontSize: { xs: '24px', sm: '28px', md: '32px' },
                            mb: { xs: 1, sm: 2 }
                        }}
                    >
                        {Features.COUNTERS.title[language]}
                    </Typography>
                    <Typography
                        color="white"
                        sx={{ 
                            mt: { xs: 1, sm: 2 }, 
                            typography: Type.typography.bodyLarge,
                            fontSize: { xs: '16px', sm: '18px', md: '20px' },
                            px: { xs: 2, sm: 0 }
                        }}
                    >
                        {Features.COUNTERS.subtitle[language]}
                    </Typography>
                </Box>
                <Grid 
                    container 
                    spacing={{ xs: 2, sm: 3 }}
                    sx={{
                        justifyContent: 'center',
                        px: { xs: 1, sm: 0 }
                    }}
                >
                    {Features.COUNTERS.items.map((feature, index) => (
                        <Grid 
                            item 
                            xs={6}
                            sm={3} 
                            key={index}
                            sx={{
                                mb: { xs: 2, sm: 0 }
                            }}
                        >
                            <CounterItem
                                count={feature.count}
                                label={feature.label[language]}
                                bgColor={feature.bgColor}
                                isInView={isInView}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CounterSection;
