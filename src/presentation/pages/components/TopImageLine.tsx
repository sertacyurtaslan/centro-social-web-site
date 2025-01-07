import React from "react";
import { Box, Breadcrumbs, Container, Link, Typography } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import Type from "../../../theme/Type";

export const TopImageLine: React.FC<{
    topImage: string;
    breadcrumbs: { label?: string; link?: string | undefined }[];
}> = ({ topImage, breadcrumbs }) => {
    return (
        <Box
            sx={{
                position: "relative",
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
            }}
        >
            {/* Background image */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${topImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                {/* Title with minimal overlay */}
                <Box
                    sx={{
                        display: "inline-block",
                        backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background directly behind the text
                        padding: "8px 16px",
                        borderRadius: "4px",
                    }}
                >
                    <Typography
                        sx={{
                            typography: Type.typography.headlineExtra,
                            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Subtle text shadow
                        }}
                    >
                        {breadcrumbs[1]?.label || "Default Title"}
                    </Typography>
                </Box>

                {/* Breadcrumbs */}
                <Breadcrumbs
                    separator={<ArrowForwardIos sx={{ fontSize: "small", color: "white" }} />}
                    aria-label="breadcrumb"
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        mt: 2,
                        "& .MuiBreadcrumbs-separator": {
                            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Ensure the separator is visible
                        },
                    }}
                >
                    {breadcrumbs.map((crumb, index) =>
                        crumb.link ? (
                            <Link
                                key={index}
                                href={crumb.link}
                                sx={{
                                    color: "white",
                                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                                    textDecoration:"none",
                                }}
                            >
                                {crumb.label}
                            </Link>
                        ) : (
                            <Typography
                                key={index}
                                sx={{
                                    color: "white",
                                    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
                                    textDecoration:"none"
                                }}
                            >
                                {crumb.label}
                            </Typography>
                        )
                    )}
                </Breadcrumbs>
            </Container>
        </Box>
    );
};
