import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {Features} from "../../../../../assets/features/Features";
import { useLanguage } from '../../../../../context/LanguageContext';
import { KeyboardArrowDown } from '@mui/icons-material';

const CardGrid = () => {
    const { language } = useLanguage();
    const [isInView, setIsInView] = useState<boolean[]>(new Array(Features.CARD_ITEMS.length).fill(false));
    const cardRefs = Features.CARD_ITEMS.map(() => React.createRef<HTMLDivElement>());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setIsInView((prev) => {
                            const newInView = [...prev];
                            newInView[index] = true;
                            return newInView;
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        cardRefs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            cardRefs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [cardRefs]);

    return (
        <Container 
            maxWidth="lg" 
            sx={{ 
                display: { xs: 'none', sm: 'block' } // Hide on mobile (xs), show on sm and up
            }}
        >
            <Grid 
                container 
                spacing={{ xs: 1, sm: 2, md: 4 }} 
                sx={{ 
                    position: "relative",
                    justifyContent: "center",
                    px: { xs: 1, sm: 2 }
                }}
            >
                {Features.CARD_ITEMS.map((item, index) => (
                    <Grid
                        item
                        xs={6}
                        sm={6}
                        md={3}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: { xs: '8px', sm: '15px', md: '20px' },
                        }}
                    >
                        <a href={item.href} style={{ textDecoration: 'none' }}>
                            <Box
                                ref={cardRefs[index]}
                                sx={{
                                    position: 'relative',
                                    transition: 'transform 1s ease-out, opacity 1s ease-out',
                                    opacity: isInView[index] ? 1 : 0,
                                    transform: isInView[index] ? 'translateY(0)' : 'translateY(50px)',
                                }}
                            >
                                <Card
                                    sx={{
                                        backgroundColor: item.color,
                                        color: "white",
                                        height: { xs: '100px', sm: '160px', md: '190px' },
                                        width: { xs: '100px', sm: '200px', md: '260px' },
                                        textAlign: 'center',
                                        overflow: 'visible',
                                        borderRadius: { xs: '12px', sm: '16px' },
                                        paddingTop: { xs: '20px', sm: '35px', md: '40px' },
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                        position: 'relative',
                                    }}
                                >
                                    <Box
                                        className="circle-icon"
                                        sx={{
                                            position: 'absolute',
                                            top: { xs: '-15px', sm: '-30px', md: '-40px' },
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: { xs: '30px', sm: '60px', md: '80px' },
                                            height: { xs: '30px', sm: '60px', md: '80px' },
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            border: { xs: `2px solid ${item.color}`, sm: `4px solid ${item.color}` },
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 2,
                                        }}
                                    >
                                        <Box sx={{ color: item.color, fontSize: { xs: 16, sm: 30, md: 40 } }}>
                                            {React.createElement(item.icon)}
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ 
                                        marginTop: { xs: '8px', sm: '20px', md: '24px' },
                                        padding: { xs: '4px', sm: '16px', md: '16px' },
                                        '&:last-child': { 
                                            paddingBottom: { xs: '8px', sm: '16px' } 
                                        }
                                    }}>
                                        <Typography
                                            className="card-title"
                                            variant="h5"
                                            sx={{
                                                fontFamily: 'Dosis, sans-serif',
                                                fontWeight: 700,
                                                fontSize: { xs: '12px', sm: '20px', md: '24px' },
                                                marginBottom: { xs: '4px', sm: '10px', md: '12px' },
                                                lineHeight: { xs: 1.2, sm: 1.5 },
                                            }}
                                        >
                                            {item.title[language]}
                                        </Typography>
                                        <KeyboardArrowDown 
                                            className="arrow-icon"
                                            sx={{ 
                                                color: 'white',
                                                fontSize: '24px',
                                                opacity: 0,
                                                transform: 'translateY(-10px)',
                                                transition: 'all 0.3s ease-in-out',
                                                marginTop: '8px'
                                            }} 
                                        />
                                    </CardContent>
                                </Card>
                            </Box>
                        </a>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CardGrid;
