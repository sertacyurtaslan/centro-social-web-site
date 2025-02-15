import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Features } from "../../../../../assets/features/Features";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';

export const EmployementServiceSection = () => {
    const { language } = useLanguage() as { language: Language };
    const { title, content, image } = Features.EMPLOYEMENT_SERVICE;

    return (
        <Box>
            <Box sx={{ 
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))'
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    width: { xs: '100%', md: 550 },
                                    height: { xs: 400, md: 550 },
                                    mx: "auto",
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 4,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    transform: 'perspective(1000px) rotateY(-5deg)',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'perspective(1000px) rotateY(0deg)',
                                    }
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                p: { xs: 2, md: 4 },
                                borderRadius: 4,
                                background: 'rgba(255,255,255,0.9)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            }}>
                                <Typography 
                                    variant="h2" 
                                    sx={{ 
                                        color: "info.main",
                                        fontWeight: "bold",
                                        mb: 4,
                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                        position: 'relative',
                                        '&:after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -10,
                                            left: 0,
                                            width: 80,
                                            height: 4,
                                            backgroundColor: 'info.main',
                                            borderRadius: 2
                                        }
                                    }}
                                >
                                    {title[language]}
                                </Typography>
                                {content[language].map((paragraph: string, index: number) => (
                                    <Typography
                                        key={index}
                                        sx={{ 
                                            color: "text.primary",
                                            textAlign: "justify",
                                            fontSize: { xs: 14, md: 16 },
                                            mb: 3,
                                            lineHeight: 1.8,
                                            opacity: 0.9,
                                            '&:last-child': {
                                                mb: 0
                                            }
                                        }}
                                    >
                                        {paragraph}
                                    </Typography>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};
