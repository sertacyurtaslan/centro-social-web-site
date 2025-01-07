import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import {Features} from "../../../../../assets/features/Features";

export const QualityPolicySection = () => {
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
                        {qualityPolicy.title}
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
                        <strong>{qualityPolicy.objective}</strong>
                    </Box>
                </Box>

                {/* Content */}
                {qualityPolicy.content.map((paragraph, index) => (
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
                        <strong>{qualityPolicy.values}</strong>
                    </Box>
                </Box>

                {/* Divider */}
                <Divider sx={{ marginBottom: 4 }} />

                {/* Approved Date */}
                <Box sx={{ textAlign: 'right', fontStyle: 'italic', fontSize: '0.875rem', color: 'text.secondary' }}>
                    {qualityPolicy.approvedDate}
                </Box>
            </Container>
        </Box>
    );
};

