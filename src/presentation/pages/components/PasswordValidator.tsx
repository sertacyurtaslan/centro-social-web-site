import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { CheckCircle, Warning } from '@mui/icons-material';
import { useLanguage } from '../../../context/LanguageContext';
import { Language } from '../../../types/LanguageTypes';
import { Features } from '../../../assets/features/Features';

interface PasswordValidatorProps {
    password: string;
}

const PasswordValidator: React.FC<PasswordValidatorProps> = ({ password }) => {
    const { language } = useLanguage() as { language: Language };
    const { PASSWORD_VALIDATOR } = Features;
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [containsSpecialChar, setContainsSpecialChar] = useState(false);

    useEffect(() => {
        setIsLengthValid(password.length >= 10);
        setContainsSpecialChar(/[^A-Za-z0-9]/.test(password));
    }, [password]);

    return (
        <Box sx={styles.container}>
            <Box sx={styles.row}>
                {isLengthValid ? (
                    <CheckCircle sx={{ color: 'green' }} />
                ) : (
                    <Warning sx={{ color: 'red' }} />
                )}
                <Typography sx={styles.text}>
                    {PASSWORD_VALIDATOR.requirements.length[language]}
                </Typography>
            </Box>

            <Box sx={styles.row}>
                {containsSpecialChar ? (
                    <CheckCircle sx={{ color: 'green' }} />
                ) : (
                    <Warning sx={{ color: 'red' }} />
                )}
                <Typography sx={styles.text}>
                    {PASSWORD_VALIDATOR.requirements.specialChar[language]}
                </Typography>
            </Box>
        </Box>
    );
};

const styles = {
    container: {
        paddingLeft: 2,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 2,
    },
    text: {
        marginLeft: 1,
    },
};

export default PasswordValidator;
