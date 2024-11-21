import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Article, CalendarToday, Photo, Folder } from '@mui/icons-material';
import Color from "../../../../../theme/Color";

const cardItems = [
    { href: "#courses", color: Color.yellow.main, icon: <Article fontSize="large" />, title: "Projectos" },
    { href: "#agenda", color: Color.green.main, icon: <CalendarToday fontSize="large" />, title: "Agenda" },
    { href: "#galeria", color: Color.red.main, icon: <Photo fontSize="large" />, title: "Galeria" },
    { href: "#noticias", color: Color.blue.main, icon: <Folder fontSize="large" />, title: "Noticias" },
];

const CardGrid = () => (
    <Container>
        <Grid container spacing={4} sx={{ position:"relative" ,marginRight: '800px' }}> {/* Increased spacing between grid items */}
            {cardItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <a href={item.href} style={{ textDecoration: 'none' }}>
                        <Box sx={{ position: 'relative', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                            {/* Card */}
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
                                {/* Icon Circle */}
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
                                        {item.icon}
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

export default CardGrid;
