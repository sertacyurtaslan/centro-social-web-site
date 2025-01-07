import React, { useState } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, FormControlLabel, Checkbox, Link, Snackbar, Alert } from '@mui/material';
import { Map, Mail, Phone, Person, Message } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

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
                message: message,
            };
    
            await emailjs.send('service_wieq06u', 'template_spbr9q9', templateParams, 'U1kCbFdmLZjXkgh3l');
    
            setSnackbarMessage('Sua mensagem foi enviada. Entraremos em contato com você por e-mail em breve.');
            setSnackbarOpen(true);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending email:', error);
            setSnackbarMessage('Erro ao enviar a mensagem. Tente novamente.');
            setSnackbarOpen(true);
        }
    };
    

    return (
        <section style={{ backgroundColor: '#f8f9fa', padding: '3rem 0' }}>
            <Container>
                <Grid container spacing={3}>
                    {/* Contact Information */}
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Typography variant="h4" color="error" gutterBottom>
                                Contacto
                            </Typography>
                            <Typography variant="body1" color="textSecondary" paragraph>
                                Utilize o nosso formulário para entrar em contacto connosco
                            </Typography>
                            <Box>
                                <Box display="flex" alignItems="center" mb={3}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            backgroundColor: 'warning.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 2,
                                        }}
                                    >
                                        <Map sx={{ color: 'white' }} />
                                    </Box>
                                    <Typography variant="body1">
                                        Rua Rodrigues de Freitas, 2200 4445-637 Ermesinde
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={3}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            backgroundColor: 'success.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 2,
                                        }}
                                    >
                                        <Mail sx={{ color: 'white' }} />
                                    </Box>
                                    <Typography variant="body1">
                                        <Link href="mailto:geral@cse.pt" color="textPrimary">
                                            geral@cse.pt
                                        </Link>
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={3}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            backgroundColor: 'info.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 2,
                                        }}
                                    >
                                        <Phone sx={{ color: 'white' }} />
                                    </Box>
                                    <Typography variant="body1">
                                        <Link href="tel:229747194" color="textPrimary">
                                            229747194 (Chamada para a rede fixa nacional)
                                        </Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Contact Form */}
                    <Grid item xs={12} sm={6}>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Nome (opcional)"
                                variant="outlined"
                                margin="normal"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <Person sx={{ color: 'action.active', marginRight: '8px' }} />
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                margin="normal"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <Mail sx={{ color: 'action.active', marginRight: '8px' }} />
                                    ),
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Mensagem"
                                variant="outlined"
                                margin="normal"
                                required
                                multiline
                                rows={6}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <Message sx={{ color: 'action.active', marginRight: '8px' }} />
                                    ),
                                }}
                            />

                            {/* Privacy Checkbox */}
                            <Box display="flex" alignItems="center" mt={2}>
                                <FormControlLabel
                                    control={<Checkbox required />}
                                    label={
                                        <Typography variant="body2">
                                            Li e aceito a{' '}
                                            <Link href="politica_privacidade.html" target="_blank" underline="hover">
                                                Politica de Privacidade
                                            </Link>
                                        </Typography>
                                    }
                                />
                            </Box>

                            {/* Submit Button */}
                            <Button
                                variant="contained"
                                color="error"
                                type="submit"
                                sx={{ mt: 3, float: 'right' }}
                            >
                                Enviar Mensagem
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

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
            </Container>
        </section>
    );
};

export default ContactSection;
