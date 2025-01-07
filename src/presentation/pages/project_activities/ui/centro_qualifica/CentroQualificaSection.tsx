import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Features } from "../../../../../assets/features/Features";

export const CentroQualificaSection = () => {
  const centroQualifica = Features.CENTRO_QUALIFICA;

  return (
    <Box py={5} sx={{ backgroundColor: '#f5f5f5', margin: '0 auto', maxWidth: '1200px' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
          {centroQualifica.title}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
          {centroQualifica.description}
        </Typography>
      </Box>

      <Box mb={4} textAlign="center">
        <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>
          Objectivos:
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {centroQualifica.objectives.map((objective, index) => (
            <li key={index}>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
                {objective}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>

      <Box mb={4} textAlign="center">
        <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>
          Destinatários:
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {centroQualifica.targetAudience.map((audience, index) => (
            <li key={index}>
              <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
                {audience}
              </Typography>
            </li>
          ))}
        </ul>
      </Box>

      <Box mb={4} textAlign="center">
        <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>
          Informações de Contato:
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          Endereço: {centroQualifica.contactInfo.address}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          Email: <a href={`mailto:${centroQualifica.contactInfo.email}`}>{centroQualifica.contactInfo.email}</a>
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          Telefone: <a href={`tel:${centroQualifica.contactInfo.phone}`}>{centroQualifica.contactInfo.phone}</a>
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          Facebook: <a href={centroQualifica.contactInfo.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </Typography>
      </Box>

      <Box mb={4} textAlign="center">
        <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>
          Vídeos
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KVJSC8fGJVg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/h2AMe_6ning"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video 2"
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Button
            variant="contained"
            color="error"
            href="https://forms.gle/NuaVXc9ajxe4EY7VA"
            target="_blank"
            sx={{ mt: 2 }}
          >
            Inscrição Centro Qualifica
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
