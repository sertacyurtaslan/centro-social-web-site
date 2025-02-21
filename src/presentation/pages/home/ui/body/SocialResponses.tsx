import React, { memo, useEffect, useState } from 'react';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Type from "../../../../../theme/Type";
import { Features } from "../../../../../assets/features/Features";
import Color from "../../../../../theme/Color";
import { useLanguage } from '../../../../../context/LanguageContext';
import { TranslatedText } from '../../../../../types/LanguageTypes';

interface SocialResponse {
    icon: any;
    color: string;
    title: TranslatedText;
    text: TranslatedText;
}

const SocialResponses= memo (() => {
    const { language } = useLanguage();
    const [inView, setInView] = useState<boolean[]>(new Array(Features.SOCIAL_RESPONSES.items.length).fill(false));
    const refs = Features.SOCIAL_RESPONSES.items.map(() => React.createRef<HTMLDivElement>());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setInView((prevState) => {
                            const newState = [...prevState];
                            newState[index] = true; // Set item to in view when it enters the viewport
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [refs]);

    return (
        <Box pt={{ xs: 0, sm: 2, md: 4 }} pb={{ xs: 4, sm: 5, md: 6 }}>
            <Container sx={{ 
                height: { xs: "auto", sm: "465px" }, // Auto height on mobile
                maxWidth: { xs: '100%', sm: 'lg' },
                px: { xs: 2, sm: 3 }
            }}>
                <Box
                    sx={{
                        opacity: inView[0] ? 1 : 0,
                        transform: inView[0] ? 'translateY(0)' : 'translateY(50px)',
                        transition: 'transform 1s ease-out, opacity 1s ease-out',
                        textAlign: 'center',
                        mb: { xs: 2, sm: 3, md: 4 }, // Further reduced margin bottom of title
                    }}
                >
                    <Typography 
                        sx={{ 
                            typography: Type.typography.displayLarge,
                            color: Color.red.main,
                            fontSize: { xs: '24px', sm: '32px', md: '40px' } // Responsive font size
                        }}
                    >
                        {Features.SOCIAL_RESPONSES.title[language]}
                    </Typography>
                </Box>
                <Grid container spacing={{ xs: 2, sm: 3 }}> {/* Reduced spacing on mobile */}
                    {Features.SOCIAL_RESPONSES.items.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                ref={refs[index]}
                                sx={{
                                    opacity: inView[index] ? 1 : 0,
                                    transform: inView[index] ? 'translateY(0)' : 'translateY(50px)',
                                    transition: 'transform 1s ease-out, opacity 1s ease-out',
                                    mb: { xs: 2, sm: 0 } // Add margin bottom on mobile
                                }}
                            >
                                <Card sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start', // Align items to top
                                    flexDirection: 'row',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    p: { xs: 1, sm: 2 }, // Add padding on mobile
                                }}>
                                    {/* Icon Circle */}
                                    <Box
                                        sx={{
                                            bgcolor: feature.color,
                                            borderRadius: '50%',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: { xs: 1.5, sm: 2 }, // Reduced padding on mobile
                                            minWidth: { xs: '60px', sm: '80px' }, // Fixed width to prevent shifting
                                            height: { xs: '60px', sm: '80px' }, // Fixed height to prevent shifting
                                            flexShrink: 0, // Prevent icon from shrinking
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: { xs: 35, sm: 45 },
                                                height: { xs: 35, sm: 45 },
                                                border: '2px solid white',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                p: { xs: 0.4, sm: 0.5 },
                                                '& svg': { // Style the icon directly
                                                    fontSize: { xs: '20px', sm: '24px' }
                                                }
                                            }}
                                        >
                                            {React.createElement(feature.icon)}
                                        </Box>
                                    </Box>

                                    {/* Text Content */}
                                    <Box sx={{ 
                                        ml: { xs: 1.5, sm: 2 },
                                        flex: 1, // Allow text to take remaining space
                                    }}>
                                        <Typography 
                                            sx={{ 
                                                typography: Type.typography.displayMedium,
                                                color: feature.color,
                                                fontSize: { xs: '18px', sm: '20px', md: '24px' },
                                                mb: { xs: 0.5, sm: 1 }
                                            }}
                                        >
                                            {feature.title[language]}
                                        </Typography>
                                        <Typography 
                                            sx={{ 
                                                typography: Type.typography.displaySmall,
                                                fontSize: { xs: '14px', sm: '16px' },
                                                lineHeight: { xs: 1.4, sm: 1.6 }
                                            }}
                                        >
                                            {feature.text[language]}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
});

export default SocialResponses;
