import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Features } from "../../../../../assets/features/Features";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';

export const CentroQualificaSection = () => {
  const { language } = useLanguage() as { language: Language };
  const centroQualifica = Features.CENTRO_QUALIFICA;

  return (
    <Box py={5} sx={{ backgroundColor: '#f5f5f5', margin: '0 auto', maxWidth: '1200px' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif' }}>
          {centroQualifica.title[language]}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
          {centroQualifica.description[language]}
        </Typography>
      </Box>

      <Box mb={4} textAlign="center">
        <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>
          {Features.CENTRO_QUALIFICA.headers.objectives[language]}
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {centroQualifica.objectives[language].map((objective: string, index: number) => (
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
          {Features.CENTRO_QUALIFICA.headers.targetAudience[language]}
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {centroQualifica.targetAudience[language].map((audience: string, index: number) => (
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
          {Features.CENTRO_QUALIFICA.headers.contactInfo[language]}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          {Features.CENTRO_QUALIFICA.headers.address[language]}: {centroQualifica.contactInfo.address}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          Email: <a href={`mailto:${centroQualifica.contactInfo.email}`}>{centroQualifica.contactInfo.email}</a>
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          {Features.CENTRO_QUALIFICA.headers.phone[language]}: <a href={`tel:${centroQualifica.contactInfo.phone}`}>{centroQualifica.contactInfo.phone}</a>
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1rem', lineHeight: 1.5 }}>
          Facebook: <a href={centroQualifica.contactInfo.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </Typography>
      </Box>

      <Box mb={4} textAlign="center">
        <Typography variant="h6" color="textPrimary" gutterBottom sx={{ fontWeight: 'bold' }}>
          {Features.CENTRO_QUALIFICA.headers.videos[language]}
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
            {Features.CENTRO_QUALIFICA.button[language]}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
