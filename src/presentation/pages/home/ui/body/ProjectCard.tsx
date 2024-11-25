import React from "react";
import {Card, CardMedia, CardContent, Button, Typography, Box} from "@mui/material";
import Color from "../../../../../theme/Color";
import Type from "../../../../../theme/Type";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    color: string; // Renk sınıfı (danger, warning, info vb.)
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link, color }) => (
    <Card
        sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
        }}
    >
        <a href={link} target="_blank" rel="noopener noreferrer">
            <CardMedia component="img" image={image} alt={title} />
        </a>
        {/* Colored Line */}
        <Box
            sx={{
                height: "5px",
                backgroundColor: color,
            }}
        />

        <CardContent sx={{backgroundColor: Color.gray.main}}>
            <Typography
                sx={{
                    typography: Type.typography.headlineLarge,
                    color: color,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                }}
                title={title} // Tam başlık için tooltip
            >
                {title}
            </Typography>
            <Box
                sx={{
                    height: "10px",
                }}
            />
            <Typography
                color="text.secondary"
                sx={{ typography:Type.typography.bodySmall ,display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 4, overflow: "hidden" }}
            >
                {description}
            </Typography>
            <Button
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                    mt: 2,
                    color: color,
                    borderColor: color,
                    backgroundColor: Color.white.main,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    transition: "all 0.3s ease-in-out", // Smooth transition
                    "&:hover": {
                        backgroundColor: color, // Card's color fills the button on hover
                        color: "white", // Change text color to white for contrast
                        borderColor: color,
                    },
                }}
            >
                Mais
            </Button>

        </CardContent>
    </Card>
);

export default ProjectCard;
