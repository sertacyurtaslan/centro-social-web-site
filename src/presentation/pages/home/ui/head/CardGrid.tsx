import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {Features} from "../../../../../assets/features/Features";

const CardGrid = () => {
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
        <Container>
            <Grid container spacing={4} sx={{ position: "relative" }}>
                {Features.CARD_ITEMS.map((item, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '20px',
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
                                        height: '190px',
                                        width: '260px',
                                        textAlign: 'center',
                                        overflow: 'hidden',
                                        borderRadius: '16px',
                                        paddingTop: '40px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '-40px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '80px',
                                            height: '80px',
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            border: `4px solid ${item.color}`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 1,
                                        }}
                                    >
                                        <Box sx={{ color: item.color, fontSize: 40 }}>
                                            {React.createElement(item.icon)}  {/* Call it as a component */}
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ marginTop: '24px' }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: 'Dosis, sans-serif',
                                                fontWeight: 700,
                                                fontSize: '24px',
                                                marginBottom: '12px',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <a href={item.href} className="btn-scroll-down" style={{ color: 'white' }}>
                                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                        </a>
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
