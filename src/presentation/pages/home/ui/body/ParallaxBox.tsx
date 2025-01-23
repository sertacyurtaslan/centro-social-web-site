import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Article } from "@mui/icons-material";

interface ParallaxBoxProps {
    title?: string;
    subtitle?: string;
    buttonLink?: string;
    buttonText?: string;
    buttonIcon?: React.ReactNode;
    backgroundImage?: string;
}

const ParallaxBox: React.FC<ParallaxBoxProps> = ({
    title = "Default Title",
    subtitle = "Default Subtitle",
    buttonLink = "#",
    buttonText = "Learn More",
    buttonIcon = <Article />,
    backgroundImage = "",
}) => {
    const [isInView, setIsInView] = useState<boolean>(false);
    const boxRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (boxRef.current) observer.observe(boxRef.current);

        return () => {
            if (boxRef.current) observer.unobserve(boxRef.current);
        };
    }, [boxRef]);

    return (
        <Box
            ref={boxRef}
            sx={{
                height: { xs: '400px', sm: '450px', md: '500px' },
                width: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: { xs: 'scroll', md: 'fixed' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                my: { xs: 2, sm: 3, md: 4 }
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    px: { xs: 2, sm: 3, md: 4 }
                }}
            >
                <Box
                    sx={{
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? "translateY(0)" : "translateY(50px)",
                        transition: "transform 1s ease-out, opacity 1s ease-out",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3.5rem' },
                            fontWeight: 'bold',
                            mb: { xs: 2, sm: 3 },
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            px: { xs: 2, sm: 0 }
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                            mb: { xs: 3, sm: 4 },
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                            px: { xs: 2, sm: 0 }
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{
                            padding: { xs: '8px 20px', sm: '10px 25px', md: '12px 30px' },
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                            textTransform: 'none',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
                            },
                            transition: 'all 0.3s ease',
                        }}
                        href={buttonLink}
                        target="_blank"
                    >
                        {buttonIcon} 
                        <Box sx={{ width: { xs: 4, sm: 6, md: 8 } }} /> 
                        {buttonText}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ParallaxBox;
