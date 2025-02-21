import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Avatar, Skeleton, CircularProgress } from '@mui/material';
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { db } from '../../../../../data/firebase/FirebaseConfig';
import { Volunteer } from '../../../../../types/VolunteerTypes';
import { useLanguage } from '../../../../../context/LanguageContext';

export const VolunteersSection = () => {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [loading, setLoading] = useState(true);
    const { language } = useLanguage();

    useEffect(() => {
        const fetchVolunteers = async () => {
            try {
                const volunteersRef = collection(db, 'volunteers');
                const q = query(
                    volunteersRef, 
                    orderBy('createdAt', 'desc'),
                    limit(10)
                );
                const querySnapshot = await getDocs(q);
                
                const volunteersData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    createdAt: doc.data().createdAt?.toDate()
                })) as Volunteer[];

                setVolunteers(volunteersData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching volunteers:', error);
                setLoading(false);
            }
        };

        fetchVolunteers();
    }, []);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    sx={{
                        textAlign: 'center',
                        mb: 6,
                        fontWeight: 'bold',
                        color: 'primary.main'
                    }}
                >
                    {language === 'pt' ? 'Nossa Equipe de Voluntários' : 'Our Volunteer Team'}
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {volunteers.map((volunteer) => (
                        <Grid item xs={12} sm={6} md={4} key={volunteer.id}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    p: 3,
                                    height: '100%',
                                    backgroundColor: 'background.paper',
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: 3,
                                    }
                                }}
                            >
                                <Avatar
                                    src={volunteer.photoUrl}
                                    sx={{
                                        width: 150,
                                        height: 150,
                                        mb: 2,
                                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
                                        border: '4px solid white'
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        color: 'text.primary'
                                    }}
                                >
                                    {volunteer.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.6
                                    }}
                                >
                                    {volunteer.description[language]}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}; 