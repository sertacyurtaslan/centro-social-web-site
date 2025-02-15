import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Features } from "../../../../../assets/features/Features";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';

export const E2ovSection = () => {
    const { language } = useLanguage() as { language: Language };
    const { title, content, image } = Features.E2OV;

    return (
        <Box>
            <Box sx={{ py: { xs: 7, md: 10 } }}>
                <Container>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    width: 500,
                                    height: 500,
                                    mx: "auto", // Ortalamak için
                                    backgroundImage: `url(${image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography variant="h2" sx={{ color: "info.main", fontWeight: "bold", mb: 3 }}>
                                    {title[language]}
                                </Typography>
                                {content[language].map((paragraph: string, index: number) => (
                                    <Typography
                                        key={index}
                                        sx={{ color: "text.primary", textAlign: "justify", fontSize: 15, mb: 3 }}
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
