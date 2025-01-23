import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import { FacebookOutlined, LinkedIn } from '@mui/icons-material';
import Colors from '../../../theme/Color';

const CopyrightSection: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: Colors.navy.main,
                minHeight: { xs: "50px", sm: "65px" },
                display: 'flex',
                alignItems: 'center',
                px: { xs: 2, sm: 4, md: 25 },
                py: { xs: 1, sm: 0 }
            }}
        >
            <Grid 
                container 
                alignItems="center" 
                justifyContent="space-between"
                spacing={{ xs: 1, sm: 2 }}
            >
                <Grid 
                    item 
                    xs={7}
                    sm={7}
                >
                    <Typography 
                        variant="body2" 
                        color="white"
                        sx={{
                            fontSize: { xs: '11px', sm: '14px' },
                            textAlign: { xs: 'left', sm: 'left' },
                            whiteSpace: 'nowrap'
                        }}
                    >
                        © 2019 Copyright Centro Social Ermesinde
                    </Typography>
                </Grid>
                <Grid 
                    item 
                    xs={5}
                    sm={5}
                >
                    <Box sx={{ 
                        display: "flex", 
                        justifyContent: "flex-end",
                        gap: { xs: 1, sm: 2 }
                    }}>
                        <IconButton
                            href="https://www.facebook.com/centrosocialdeermesinde/?epa=SEARCH_BOX"
                            target="_blank"
                            sx={{ 
                                color: 'white',
                                padding: { xs: '4px', sm: '8px' },
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                        >
                            <FacebookOutlined sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/company/centro-social-de-ermesinde/about/"
                            target="_blank"
                            sx={{ 
                                color: 'white',
                                padding: { xs: '4px', sm: '8px' },
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                }
                            }}
                        >
                            <LinkedIn sx={{ fontSize: { xs: '20px', sm: '24px' } }} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CopyrightSection;