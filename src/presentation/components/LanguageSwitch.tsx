import React from 'react';
import { Button, Box } from '@mui/material';
import { Language as LanguageIcon } from '@mui/icons-material';
import { useLanguage } from '../../context/LanguageContext';
import Color from '../../theme/Color';

const LanguageSwitch: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'pt' ? 'en' : 'pt');
    };

    return (
        <Button
            onClick={toggleLanguage}
            startIcon={<LanguageIcon />}
            sx={{
                color: Color.white.main,
                borderColor: Color.white.main,
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
            }}
            variant="outlined"
        >
            {language.toUpperCase()}
        </Button>
    );
};

export default LanguageSwitch; 