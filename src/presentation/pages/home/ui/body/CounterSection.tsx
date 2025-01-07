import React, { useState, useRef, useEffect } from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import CounterItem from "./CounterItem";
import backgroundImg from '../../../../../assets/img/background/countup-bg-img.jpg';
import { Features } from "../../../../../assets/features/Features";
import Type from "../../../../../theme/Type";

const CounterSection: React.FC = () => {
    const [isInView, setIsInView] = useState(false);
    const counterSectionRef = useRef<HTMLDivElement>(null);

    // Observer to check when the section is in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);  // Trigger counter animation when in view
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (counterSectionRef.current) {
            observer.observe(counterSectionRef.current);
        }

        return () => {
            if (counterSectionRef.current) {
                observer.unobserve(counterSectionRef.current);
            }
        };
    }, []);

    return (
        <Box
            ref={counterSectionRef}  // Attach ref here
            sx={{
                py: 9,
                pb: 8,
                height: '500px',
                backgroundImage:  `url(${backgroundImg || 'default-background.jpg'})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <Container>
                <Box textAlign="center" mb={7}>
                    <Typography color="white" sx={{ typography: Type.typography.headlineExtra }}>
                        Centro Social Ermesinde
                    </Typography>
                    <Typography
                        color="white"
                        sx={{ mt: 2, typography: Type.typography.bodyLarge }}>
                        Conheça melhor a nossa instituição
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {Features.COUNTERS.map((feature, index) => (
                        <Grid item xs={12} sm={3} key={index}>
                            <CounterItem
                                count={feature.count}
                                label={feature.label}
                                bgColor={feature.bgColor}
                                isInView={isInView}  // Pass visibility state as a prop
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default CounterSection;
