import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { Features } from "../../../../../data/feature/Features";
import Type from "../../../../../theme/Type";

const Projects = () => {
    const [inView, setInView] = useState<boolean[]>(new Array(Features.PROJECTS.length).fill(false)); // Track visibility for each item
    const [titleInView, setTitleInView] = useState<boolean>(false); // Track visibility for the title

    // Create refs for each Grid item to observe visibility
    const refs = Features.PROJECTS.map(() => React.createRef<HTMLDivElement>());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setInView((prevState) => {
                            const newState = [...prevState];
                            newState[index] = true; // Set item to in view when it enters the viewport
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        refs.forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.forEach((ref) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [refs]);

    return (
        <section id="courses" style={{ padding: "4rem 0" }}>
            <Container>
                {/* Title Animation */}
                <Box
                    sx={{
                        opacity: titleInView ? 1 : 0,
                        transform: titleInView ? 'translateY(0)' : 'translateY(30px)', // Slide up effect for the title
                        transition: 'transform 1s ease-out, opacity 1s ease-out', // Animation duration
                        textAlign: 'center',
                        mb: 8,
                    }}
                    ref={(el:any) => {
                        if (el && !titleInView) {
                            const observer = new IntersectionObserver(
                                ([entry]) => {
                                    if (entry.isIntersecting) {
                                        setTitleInView(true);
                                    }
                                },
                                { threshold: 0.5 }
                            );
                            observer.observe(el);
                        }
                    }}
                >
                    <Typography sx={{ typography: Type.typography.displayLarge }} color="error">
                        Projectos
                    </Typography>
                </Box>

                {/* Grid of Project Cards */}
                <Grid container spacing={4}>
                    {Features.PROJECTS.map((project, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                ref={refs[index]} // Attach ref to each item
                                sx={{
                                    opacity: inView[index] ? 1 : 0,
                                    transform: inView[index] ? 'translateY(0)' : 'translateY(30px)', // Slide up effect for project cards
                                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out', // Animation duration
                                }}
                            >
                                <ProjectCard
                                    {...project}
                                    color={project.color}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default Projects;
