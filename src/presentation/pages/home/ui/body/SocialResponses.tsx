import React, { useEffect, useState } from 'react';
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import Type from "../../../../../theme/Type";
import { Features } from "../../../../../assets/features/Features";
import Color from "../../../../../theme/Color";

const SocialResponses: React.FC = () => {
    const [inView, setInView] = useState<boolean[]>(new Array(Features.SOCIAL_RESPONSES.length).fill(false)); // Track visibility for each item

    // Create refs for each Grid item to observe visibility
    const refs = Features.SOCIAL_RESPONSES.map(() => React.createRef<HTMLDivElement>());

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
        <Box pt={9} pb={6}>
            <Container sx={{ height: "465px" }}>
                <Box
                    sx={{
                        opacity: inView[0] ? 1 : 0,
                        transform: inView[0] ? 'translateY(0)' : 'translateY(50px)', // Slide up effect for the title
                        transition: 'transform 1s ease-out, opacity 1s ease-out', // Animation duration
                        textAlign: 'center',
                        mb: 8,
                    }}
                >
                    <Typography sx={{ typography: Type.typography.displayLarge , color: Color.red.main }} >
                        Respostas Sociais
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {Features.SOCIAL_RESPONSES.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                ref={refs[index]} // Attach ref to each item
                                sx={{
                                    opacity: inView[index] ? 1 : 0,
                                    transform: inView[index] ? 'translateY(0)' : 'translateY(50px)', // Slide up effect
                                    transition: 'transform 1s ease-out, opacity 1s ease-out', // Animation duration
                                }}
                            >
                                <Card sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
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
                                            p: 2,
                                            mb: 2,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 45,
                                                height: 45,
                                                border: '2px solid white',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                p: 0.5,
                                            }}
                                        >
                                            {/* Render the icon component correctly */}
                                            {React.createElement(feature.icon)}
                                        </Box>
                                    </Box>

                                    {/* Text Content */}
                                    <Box sx={{ ml: 2 }}> {/* Added margin-left */}
                                        <Typography sx={{ typography: Type.typography.displayMedium, color: feature.color }}>
                                            {feature.title}
                                        </Typography>
                                        <Typography sx={{ typography: Type.typography.displaySmall }}>
                                            {feature.text}
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
};

export default SocialResponses;
