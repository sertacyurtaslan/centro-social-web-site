import { Box, Container, Grid, Typography, List, ListItem, ListItemText, Link, Divider } from "@mui/material";
import React from "react";
import { Features } from "../../../../../assets/features/Features";
import { AccessTime, Email, Facebook, LocationOn, Phone } from "@mui/icons-material";
import imgValongo from "../../../../../assets/img/logos/camara_valongo.png";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';

export const Clds4gSection = () => {
    const { language } = useLanguage() as { language: Language };
    const { subtitle, description, objective, contacts, working_hours, gallery, image } = Features.CLDS4G;

    return (
        <Box>
            {/* Main Content */}
            <Container sx={{ py: 7 }}>
                <Grid container spacing={6} direction="column">
                    {/* Subtitle and Description Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.primary" paragraph sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                            {subtitle[language]}
                        </Typography>
                        <Typography variant="body1" color="text.primary" paragraph>
                            {description[language]}
                        </Typography>
                    </Grid>

                    {/* Objective Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.primary" paragraph sx={{ fontWeight: 'bold' }}>
                            <strong>Objetivo:</strong>
                        </Typography>
                        <Typography variant="body1" color="text.primary" paragraph>
                            {objective.main[language]}
                        </Typography>
                        {objective.axes.map((axis, index) => (
                            <Box key={index} sx={{ mb: 3 }}>
                                <Typography variant="h6" color="text.primary" paragraph>
                                    <strong>{axis.title[language]}</strong>
                                </Typography>
                                <List>
                                    {axis.items[language].map((item: string, idx: number) => (
                                        <ListItem key={idx}>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </Grid>

                    {/* Contact Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.primary" paragraph sx={{ fontWeight: 'bold' }}>
                            <strong>CONTACTOS:</strong>
                        </Typography>
                        <List sx={{ mb: 3 }}>
                            {contacts.map((contact, index) => (
                                <ListItem key={index}>
                                    {contact.type === "Phone" && <Phone />}
                                    {contact.type === "Email" && <Email />}
                                    <ListItemText
                                        primary={<Link href={contact.link}>{contact.label}: {contact.number}</Link>}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Working Hours and Locations Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.primary" paragraph sx={{ fontWeight: 'bold' }}>
                            <strong>HORÁRIO E LOCAL DE ATENDIMENTO:</strong>
                        </Typography>
                        <List sx={{ mb: 3 }}>
                            {working_hours.map((item, index) => (
                                <ListItem key={index}>
                                    {item.type === "Location" && <LocationOn />}
                                    {item.type === "Time" && <AccessTime />}
                                    {item.type === "Link" && <Facebook />}
                                    <ListItemText
                                        primary={<strong>{item.label}</strong>}
                                        secondary={item.secondary}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    {/* Social Media Section */}
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.primary" paragraph sx={{ fontWeight: 'bold' }}>
                            <strong>Redes Sociais:</strong>
                        </Typography>
                        <List>
                            <ListItem>
                                <Facebook color="info" />
                                <ListItemText primary={<Link href={working_hours[3].link}>Facebook</Link>} />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>

            {/* Gallery Section */}
            <Container sx={{ py: 7 }}>
                <Grid container spacing={4}>
                    {gallery.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{
                                borderRadius: '12px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': { transform: 'scale(1.05)' }
                            }}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: '12px',
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Promoter Logo Section */}
            <Container sx={{ py: 7 }}>
                <Grid container justifyContent="flex-start" alignItems="center">
                    <Grid item xs={12} textAlign="left">
                        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                            <strong>Entidade Promotora:</strong>
                        </Typography>
                        <img
                            src={imgValongo}
                            alt="logo valongo"
                            style={{
                                maxWidth: '200px',
                                marginTop: '20px',
                                display: 'block',
                                marginLeft: '0',
                            }}
                        />
                    </Grid>
                </Grid>
            </Container>

            {/* Logos Moved Below Gallery */}
            <Container sx={{ py: 7 }}>
                <Grid container justifyContent="flex-start" alignItems="center">
                    <Grid item xs={12} textAlign="left">
                        <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                            <strong>Cofinanciado por:</strong>
                        </Typography>
                        {Object.values(image).map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                style={{
                                    maxWidth: '100px', // Adjusted size for better visibility
                                    marginBottom: '10px',
                                    marginRight: '10px',
                                    display: 'inline-block',
                                }}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
