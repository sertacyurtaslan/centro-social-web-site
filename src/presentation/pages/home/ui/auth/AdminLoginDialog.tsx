import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
    IconButton,
    Typography,
    Alert,
    InputAdornment,
} from '@mui/material';
import { 
    Close, 
    AdminPanelSettings,
    Visibility,
    VisibilityOff 
} from '@mui/icons-material';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../../../data/firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';
import { Features } from '../../../../../assets/features/Features';

interface AdminLoginDialogProps {
    onClose: () => void;
}

const AdminLoginDialog: React.FC<AdminLoginDialogProps> = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { language } = useLanguage() as { language: Language };
    const { login } = Features.AUTH;

    const handleAdminLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const adminsRef = collection(db, 'admins');
            const q = query(adminsRef, where('adminMail', '==', email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setError('Admin não encontrado');
                setLoading(false);
                return;
            }

            const adminDoc = querySnapshot.docs[0];
            const adminData = adminDoc.data();

            if (adminData.adminPassword === password) {
                // Store admin session in sessionStorage instead of localStorage
                sessionStorage.setItem('adminSession', JSON.stringify({
                    adminId: adminDoc.id,
                    adminMail: email,
                    timestamp: new Date().getTime()
                }));
                
                onClose();
                navigate('/admin');
            } else {
                setError('Credenciais inválidas');
            }
        } catch (error) {
            console.error('Admin login error:', error);
            setError('Erro ao fazer login. Tente novamente.');
        }

        setLoading(false);
    };

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog 
            open={true} 
            onClose={handleClose}
            PaperProps={{
                sx: {
                    width: '100%',
                    maxWidth: '400px',
                    borderRadius: '12px',
                }
            }}
        >
            <DialogTitle sx={{ 
                m: 0, 
                p: 2, 
                backgroundColor: '#9C27B0',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: 1
            }}>
                <AdminPanelSettings />
                {login.title[language]}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: 'white'
                    }}
                >
                    <Close />
                </IconButton>
            </DialogTitle>

            <form onSubmit={handleAdminLogin}>
                <DialogContent sx={{ pt: 3 }}>
                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        label={login.email.label[language]}
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        sx={{ mb: 2 }}
                        error={!!error}
                        helperText={error && login.email.error[language]}
                    />
                    
                    <TextField
                        margin="dense"
                        label={login.password.label[language]}
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        error={!!error}
                        helperText={error && login.password.error[language]}
                    />
                </DialogContent>

                <DialogActions sx={{ p: 3, pt: 1 }}>
                    <Button 
                        onClick={handleClose}
                        sx={{ color: 'text.secondary' }}
                    >
                        {login.buttons.cancel[language]}
                    </Button>
                    <Button 
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{
                            background: 'linear-gradient(45deg, #9C27B0, #7B1FA2)',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #7B1FA2, #6A1B9A)',
                            }
                        }}
                    >
                        {loading ? 'Entrando...' : login.buttons.login[language]}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default AdminLoginDialog; 