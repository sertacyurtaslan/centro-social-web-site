import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import {
    Phone,
    Facebook,
    Lock,
    Language,
    EmailRounded
} from '@mui/icons-material';
import Colors from "../../../../../theme/Color";

const topBarStyles = {
    backgroundColor: Colors.topBarColor.main,
    color: 'white',
    paddingLeft: 18,
    paddingRight: 22,
    justifyContent: 'center',
    height: '48px',
};

const iconStyles = {
    marginRight: '8px',
    fontSize: '1.2rem',
};

const TopAppBar = () => {
    const [authMenuEl, setAuthMenuEl] = useState(null);

    const handleAuthMenuOpen = (event: any) => {
        setAuthMenuEl(event.currentTarget);
    };

    const handleAuthMenuClose = () => {
        setAuthMenuEl(null);
    };

    return (
        <AppBar position="sticky" sx={topBarStyles}>
            <Toolbar>
                {/* Left section with contact info */}
                <Box sx={{ display: 'flex', flexGrow: 1 }}>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton  sx={iconStyles} component="a" href="mailto:geral@cse.pt">
                            <EmailRounded sx={{ color: 'yellow' }} />
                        </IconButton>

                        <Typography variant="body2" sx={{ color: 'white', marginRight: 2 }}>geral@cse.pt</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton sx={iconStyles} component="a" href="tel:229747194">
                            <Phone sx={{ color: 'green' }} />
                        </IconButton>
                        <Typography variant="body2" sx={{ color: 'white', marginRight: 2 }}>229747194 (Chamada para a rede fixa nacional)</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton sx={iconStyles} component="a" href="https://www.facebook.com/centrosocialdeermesinde/?epa=SEARCH_BOX" target="_blank">
                            <Facebook sx={{ color: '#3b5998' }} />
                        </IconButton>
                        <Typography sx={{ typography:"diplaySmall",color: 'white' }}>Facebook</Typography>
                    </Box>

                </Box>

                {/* Right section with login/signup */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={iconStyles}>
                        <Language sx={{ color: 'lightblue' }} />
                    </IconButton>
                    <Button
                        color="inherit"
                        sx={{ fontWeight: 'normal', textTransform: 'none', color: 'white' }}
                        startIcon={<Lock sx={{ color: 'purple' }} />}
                        onClick={handleAuthMenuOpen}
                    >
                        Login | Criar Conta
                    </Button>
                </Box>
            </Toolbar>


        </AppBar>
    );
};

export default TopAppBar;
