import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography, TextField, Button, Link, Snackbar, Alert } from '@mui/material';
import { Email, Phone, Place, Edit } from '@mui/icons-material';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from '@emailjs/browser';

const ContactsSection = () => {
    const mapRef = useRef<HTMLDivElement | null>(null); // Reference for the map container
    const center: LatLngExpression = [41.222141579177915, -8.558267249124548]; // Center of the map
    const zoom = 15;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        if (mapRef.current) {
            const map = L.map(mapRef.current).setView(center, zoom); // Initialize the map

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            // Optionally, add a marker
            L.marker(center).addTo(map).bindPopup('You are here!').openPopup();

            // Handle map resizing when the window is resized
            window.addEventListener('resize', () => map.invalidateSize());

            // Cleanup when the component unmounts
            return () => {
                map.remove();
            };
        }
    }, [center, zoom]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !message) {
            setSnackbarMessage('Por favor, preencha todos os campos obrigatórios.');
            setSnackbarOpen(true);
            return;
        }

        try {
            const templateParams = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                subject: subject,
                message: message,
            };

            await emailjs.send('service_wieq06u', 'template_spbr9q9', templateParams, 'U1kCbFdmLZjXkgh3l');

            setSnackbarMessage('Sua mensagem foi enviada. Entraremos em contato com você por e-mail em breve.');
            setSnackbarOpen(true);
            // Clear the form
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error('Error sending email:', error);
            setSnackbarMessage('Erro ao enviar a mensagem. Tente novamente.');
            setSnackbarOpen(true);
        }
    };

    return (
        <Box py={{ xs: 4, md: 6 }} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Grid container spacing={4}>
                {/* Contact Information */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="50%"
                            width={64}
                            height={64}
                            bgcolor="warning.main"
                            color="common.white"
                            mb={2}
                        >
                            <Place fontSize="large" />
                        </Box>
                        <Typography variant="h6" color="warning.main" gutterBottom>
                            Morada:
                        </Typography>
                        <Typography color="textSecondary">
                            Rua Rodrigues de Freitas, 2200
                            <br />
                            4445-637 Ermesinde
                        </Typography>
                    </Box>
                </Grid>

                {/* Phone Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="50%"
                            width={64}
                            height={64}
                            bgcolor="success.main"
                            color="common.white"
                            mb={2}
                        >
                            <Phone fontSize="large" />
                        </Box>
                        <Typography variant="h6" color="success.main" gutterBottom>
                            Telefone:
                        </Typography>
                        <Link href="tel:229747194" color="textSecondary">
                            229747194
                        </Link>
                    </Box>
                </Grid>

                {/* Email Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="50%"
                            width={64}
                            height={64}
                            bgcolor="error.main"
                            color="common.white"
                            mb={2}
                        >
                            <Email fontSize="large" />
                        </Box>
                        <Typography variant="h6" color="error.main" gutterBottom>
                            Email:
                        </Typography>
                        <Link href="mailto:informatica@gmail.com" color="textSecondary">
                            informatica@gmail.com
                        </Link>
                    </Box>
                </Grid>

                {/* Dispute Resolution Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            borderRadius="50%"
                            width={64}
                            height={64}
                            bgcolor="info.main"
                            color="common.white"
                            mb={2}
                        >
                            <Edit fontSize="large" />
                        </Box>
                        <Typography variant="h6" color="info.main" gutterBottom>
                            Resolução Alternativa de Litígios:
                        </Typography>
                        <Typography color="textSecondary">
                            A entidade de Resolução de Conflitos de Consumo (RAL) da área é o
                            <Link href="http://www.cicap.pt" target="_blank" rel="noopener">
                                CIPAC – Centro de Informação de Consumo e Arbitragem do Porto
                            </Link>
                            .
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Map Section */}
            <Box my={4} height={420} width="100%">
                <div
                    ref={mapRef} // Reference to the div that will contain the map
                    style={{ height: '100%', width: '100%' }} // Ensure the div takes the full height and width
                />
            </Box>

            {/* Contact Form */}
            <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Nome" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Endereço Email" type="email" variant="outlined" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Telefone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Assunto" variant="outlined" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth label="Mensagem" variant="outlined" multiline rows={6} value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center">
                        <Button variant="contained" color="error" size="large" type="submit">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Snackbar for feedback */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    severity="success"
                    onClose={() => setSnackbarOpen(false)}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ContactsSection;
