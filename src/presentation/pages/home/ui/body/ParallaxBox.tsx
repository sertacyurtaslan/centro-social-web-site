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
                height: '500px',
                width: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '20px',
                marginBottom: '20px'
            }}
        >
            <Container
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
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
                            fontSize: { xs: '2rem', md: '3.5rem' },
                            fontWeight: 'bold',
                            marginBottom: 3,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.5rem' },
                            marginBottom: 4,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        size="large"
                        sx={{
                            padding: '12px 30px',
                            fontSize: '1.1rem',
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
                        {buttonIcon} <Box sx={{ width: 8 }} /> {buttonText}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ParallaxBox;
