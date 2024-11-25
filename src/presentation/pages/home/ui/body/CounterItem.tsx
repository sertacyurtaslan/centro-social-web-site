import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Type from "../../../../../theme/Type";

interface CounterItemProps {
    count: number;
    label: string;
    bgColor: string;
    isInView: boolean;
}

const CounterItem: React.FC<CounterItemProps> = ({ count, label, bgColor, isInView }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        if (!isInView) return; // Only start the counter when the section is in view

        const duration = 200; // Animation duration (can adjust)
        const increment = count / duration;

        const counterInterval = setInterval(() => {
            setCurrentValue((prev) => {
                if (prev + increment >= count) {
                    clearInterval(counterInterval);
                    return count;
                }
                return prev + increment;
            });
        }, 10);

        return () => clearInterval(counterInterval);
    }, [count, isInView]);

    return (
        <Box
            textAlign="center"
            color="white"
            mb={5}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                opacity: isInView ? 1 : 0, // Initially hidden
                transform: isInView ? 'translateY(0)' : 'translateY(50px)', // Start from below
                transition: 'opacity 0.5s, transform 0.7s ease-out', // Smooth transition
            }}
        >
            {/* Counter Value with Circular Border */}
            <Box
                sx={{
                    display: "inline-flex", // Use inline-flex to center the content
                    justifyContent: "center", // Center the content horizontally
                    alignItems: "center", // Center the content vertically
                    width: "150px", // Fixed width
                    height: "150px", // Fixed height
                    padding: "0.5rem", // Padding for the counter value
                    borderRadius: "50%", // Makes the border circular
                    boxShadow: 1,
                    border: "4px solid white", // White border around the counter
                    marginBottom: 2, // Space between the counter number and the label
                }}
            >
                <Typography sx={{ typography: Type.typography.headlineExtra }}>
                    {Math.ceil(currentValue)}
                </Typography>
            </Box>

            {/* Label Below the Counter */}
            <Box
                component="span"
                sx={{
                    display: "inline-block",
                    backgroundColor: bgColor,
                    textTransform: "uppercase",
                    fontWeight: 500,
                    borderRadius: 1,
                    boxShadow: 1,
                    marginTop: 1,
                    py: 1,
                    px: 2,
                }}
            >
                {label}
            </Box>
        </Box>
    );
};

export default CounterItem;
