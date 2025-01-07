import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { CheckCircle, Warning } from '@mui/icons-material';

interface PasswordValidatorProps {
    password: string;
}

const PasswordValidator: React.FC<PasswordValidatorProps> = ({ password }) => {
    const [isLengthValid, setIsLengthValid] = useState(false);
    const [containsSpecialChar, setContainsSpecialChar] = useState(false);

    useEffect(() => {
        setIsLengthValid(password.length >= 10);
        setContainsSpecialChar(/[^A-Za-z0-9]/.test(password));
    }, [password]);

    return (
        <Box sx={{ paddingLeft: 2 }}>
            <Box sx={styles.row}>
                {isLengthValid ? (
                    <CheckCircle sx={{ color: 'green' }} />
                ) : (
                    <Warning sx={{ color: 'red' }} />
                )}
                <Typography sx={styles.text}>Pelo menos 10 caracteres</Typography>
            </Box>

            <Box sx={styles.row}>
                {containsSpecialChar ? (
                    <CheckCircle sx={{ color: 'green' }} />
                ) : (
                    <Warning sx={{ color: 'red' }} />
                )}
                <Typography sx={styles.text}>Contém um caractere especial</Typography>
            </Box>
        </Box>
    );
};

const styles = {
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
