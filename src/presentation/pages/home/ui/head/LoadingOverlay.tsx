import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingOverlay: React.FC = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                zIndex: 9999,
            }}
        >
            <CircularProgress
                sx={{
                    animation: 'rotate 2s infinite linear',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <Typography
                sx={{
                    position: 'absolute',
                    top: '70%',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: 'primary.main',
                }}
            >
                Loading...
            </Typography>
        </Box>
    );
};

export default LoadingOverlay;
