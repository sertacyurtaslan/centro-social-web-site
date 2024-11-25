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

    // Create a reference for the ParallaxBox container
    const boxRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true); // Trigger the animation when in view
                    }
                });
            },
            { threshold: 0.5 } // Start when 50% of the box is visible
        );

        if (boxRef.current) observer.observe(boxRef.current);

        return () => {
            if (boxRef.current) observer.unobserve(boxRef.current);
        };
    }, [boxRef]);

    return (
        <Box
            py={9}
            ref={boxRef} // Attach the ref
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "350px",
                backgroundAttachment: "fixed", // Keep the background fixed
                color: "white",
            }}
        >
            <Container>
                <Box textAlign="center">
                    <Typography
                        variant="h2"
                        sx={{
                            opacity: isInView ? 1 : 0,
                            transform: isInView ? "translateY(0)" : "translateY(50px)", // Slide up effect
                            transition: "transform 1s ease-out, opacity 1s ease-out", // Animation duration
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            mt: 2,
                            opacity: isInView ? 1 : 0,
                            transform: isInView ? "translateY(0)" : "translateY(50px)",
                            transition: "transform 1s ease-out, opacity 1s ease-out", // Animation duration
                        }}
                    >
                        {subtitle}
                    </Typography>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{
                            mt: 4,
                            opacity: isInView ? 1 : 0,
                            transform: isInView ? "translateY(0)" : "translateY(50px)",
                            transition: "transform 1s ease-out, opacity 1s ease-out", // Animation duration
                        }}
                        href={buttonLink}
                        target="_blank"
                    >
                        {buttonIcon} <Box sx={{ width: 6 }} /> {buttonText}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ParallaxBox;
