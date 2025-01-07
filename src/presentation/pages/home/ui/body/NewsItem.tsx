import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import Color from "../../../../../theme/Color";
import Type from "../../../../../theme/Type";

interface NewsItemProps {
    image: string;
    chipLabel: string;
    chipColor: string;
    title: string;
    description: string;
    link: string;
    buttonText: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
                                               image,
                                               chipLabel,
                                               chipColor,
                                               title,
                                               description,
                                               link,
                                               buttonText
                                           }) => {
    return (
        <Card sx={{ position: 'relative' }}>
            <Box position="relative">
                <CardMedia
                    component="img"
                    height="260"
                    width="370"
                    image={image}
                    alt="Card image"
                />
                {/* Instead of Chip, using Typography or Box for the label */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,  // Change this from `right: 0` to `left: 0`
                        padding: '8px',
                        backgroundColor: chipColor,
                        color: 'white',
                        borderRadius: '4px',
                    }}
                >
                    <Typography>{chipLabel}</Typography>
                </Box>

            </Box>

            <CardContent sx={{ backgroundColor: Color.gray.main, borderTop: `5px solid ${chipColor}`, paddingLeft: 3, paddingRight: 3 }}>
                <Typography
                    variant="h5"
                    sx={{ typography: Type.typography.headlineLarge, color: chipColor, textTransform: 'capitalize', textDecoration: 'none' }}
                    component="a"
                    href={link}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        height: "10px",
                    }}
                />
                <Typography
                    sx={{ typography:Type.typography.bodyMedium }}>{description}</Typography>
                <CardActions>
                    <Button
                        href={link}
                        variant="outlined"
                        sx={{
                            mt: 2,
                            color: chipColor,
                            borderColor: chipColor,
                            backgroundColor: Color.white.main,
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            transition: "all 0.3s ease-in-out", // Smooth transition
                            "&:hover": {
                                backgroundColor: chipColor, // Card's color fills the button on hover
                                color: "white", // Change text color to white for contrast
                                borderColor: chipColor,
                            },
                        }}
                    >
                        <i className="fa fa-angle-double-right mr-1" aria-hidden="true"></i> {buttonText}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default NewsItem;
