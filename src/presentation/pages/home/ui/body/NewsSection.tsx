import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import NewsItem from './NewsItem';
import {Features} from "../../../../../assets/features/Features";
import Type from "../../../../../theme/Type";
import Color from "../../../../../theme/Color";

const NewsSection: React.FC = () => {
    return (
        <Box pt={9} pb={7} id="noticias">
            <Box maxWidth="lg" mx="auto">
                {/* Section Title */}
                <Box display="flex" justifyContent="center" flexDirection="row" mb={4}>
                    <Typography sx={{ typography: Type.typography.displayLarge, color: Color.red.main }} >
                        Últimas Noticias
                    </Typography>
                </Box>

                <Box sx={{height:"30px"}}
                />

                {/* News Items Grid */}
                <Grid container spacing={5} justifyContent="center">
                    {Features.NEWS.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <NewsItem
                                image={item.image}
                                chipLabel={item.chipLabel}
                                chipColor={item.chipColor}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                                buttonText={item.buttonText}
                            />
                        </Grid>
                    ))}
                </Grid>

                {/* 'See More' Button */}
                <Box textAlign="center" mt={4}>
                    <Button variant="contained" sx={{ textTransform: 'uppercase', color: Color.blue.main }}>
                        <Typography sx={{color:Color.white.main}}>VER MAIS</Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default NewsSection;
