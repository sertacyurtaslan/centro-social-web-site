import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import {Features} from "../../../../../assets/features/Features";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';

export const QualityPolicySection = () => {
    const { language } = useLanguage() as { language: Language };
    const qualityPolicy = Features.QUALITY_POLICY;

    return (
        <Box sx={{ padding: "3rem" }}>
            <Container maxWidth="lg">
                {/* Title */}
                <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            color: 'text.primary',
                            textTransform: 'uppercase'
                        }}
                    >
                        {qualityPolicy.title[language]}
                    </Box>
                </Box>

                {/* Objective */}
                <Box sx={{ marginBottom: 4 }}>
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            color: 'text.primary'
                        }}
                    >
                        <strong>{qualityPolicy.objective[language]}</strong>
                    </Box>
                </Box>

                {/* Content */}
                {qualityPolicy.content[language].map((paragraph: string, index: number) => (
                    <Box key={index} sx={{ marginBottom: 3 }}>
                        <Box
                            sx={{
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                color: 'text.secondary',
                                textAlign: 'justify'
                            }}
                        >
                            {paragraph}
                        </Box>
                    </Box>
                ))}

                {/* Values */}
                <Box sx={{ marginBottom: 4 }}>
                    <Box
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            color: 'text.primary'
                        }}
                    >
                        <strong>{qualityPolicy.values[language]}</strong>
                    </Box>
                </Box>

                {/* Divider */}
                <Divider sx={{ marginBottom: 4 }} />

                {/* Approved Date */}
                <Box sx={{ textAlign: 'right', fontStyle: 'italic', fontSize: '0.875rem', color: 'text.secondary' }}>
                    {qualityPolicy.approvedDate[language]}
                </Box>
            </Container>
        </Box>
    );
};

