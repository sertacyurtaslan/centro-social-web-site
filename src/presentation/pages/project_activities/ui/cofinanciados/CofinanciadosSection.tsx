import React from 'react';
import { Box, Card, CardMedia, Typography, Button } from '@mui/material';
import { Features } from "../../../../../assets/features/Features";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';

export const CofinanciadosSection = () => {
  const { language } = useLanguage() as { language: Language };
  const projects = Features.COFINANCIADOS.projects;

  return (
    <Box py={5} sx={{ backgroundColor: '#f5f5f5' }}>
      {/* Project Information Section */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" color="textPrimary" gutterBottom>
          {Features.COFINANCIADOS.title[language]}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Norte 2020 - Equipamentos Sociais - NORTE-07-4842-FEDER-00432
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="docs/Ficha projeto web.pdf"
          target="_blank"
          sx={{ mt: 2, bgcolor: '#d32f2f', '&:hover': { bgcolor: '#c62828' } }}
        >
          <i className="fab fa-wpforms mr-2" aria-hidden="true"></i> 
          {Features.COFINANCIADOS.projectFile[language]}
        </Button>
      </Box>

      {/* Static Carousel Content */}
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              minWidth: { xs: '100%', sm: 'calc(33% - 16px)' }, // Responsive width
              bgcolor: 'white',
              boxShadow: 3,
              borderRadius: 2,
              p: 2,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)', // Scale effect on hover
              },
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title[language]}
              sx={{
                maxWidth: '80%', // Set a maximum width for the logos
                maxHeight: '100px', // Set a maximum height for the logos
                objectFit: 'contain',
                py: 1,
                mx: 'auto', // Center the image
              }}
            />
            <Box p={2}>
              <Typography variant="h6" color="textPrimary">
                {project.title[language]}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {project.description[language]}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                href={project.link}
                target="_blank"
                sx={{ mt: 1 }}
              >
                {Features.COFINANCIADOS.button[language]}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
