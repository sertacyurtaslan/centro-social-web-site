import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import ProjectsItem from "./ProjectsItem";
import { Features } from "../../../../../assets/features/Features";
import Type from "../../../../../theme/Type";
import Color from "../../../../../theme/Color";
import { useLanguage } from "../../../../../context/LanguageContext";

const ProjectsSection = () => {
    const { language } = useLanguage();
    const [inView, setInView] = useState<boolean[]>(new Array(Features.PROJECTS.items.length).fill(false));
    const [titleInView, setTitleInView] = useState<boolean>(false);

    // Create refs for each Grid item to observe visibility
    const refs = Features.PROJECTS.items.map(() => React.createRef<HTMLDivElement>());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setInView((prevState) => {
                            const newState = [...prevState];
                            newState[index] = true;
                            return newState;
                        });
                    }
                });
            },
            { threshold: 0.5 }
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
                        transform: titleInView ? 'translateY(0)' : 'translateY(30px)',
                        transition: 'transform 1s ease-out, opacity 1s ease-out',
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
                    <Typography sx={{ typography: Type.typography.displayLarge, color: Color.red.main}}>
                        {Features.PROJECTS.title[language]}
                    </Typography>
                </Box>

                {/* Grid of Project Cards */}
                <Grid container spacing={4}>
                    {Features.PROJECTS.items.map((project, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Box
                                ref={refs[index]}
                                sx={{
                                    opacity: inView[index] ? 1 : 0,
                                    transform: inView[index] ? 'translateY(0)' : 'translateY(30px)',
                                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                                }}
                            >
                                <ProjectsItem
                                    {...project}
                                    color={project.color}
                                    title={project.title[language]}
                                    description={project.description[language]}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default ProjectsSection;
