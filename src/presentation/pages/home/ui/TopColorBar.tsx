import React from "react";
import { Box } from "@mui/material";
import Colors from "../../../../theme/Color";

// Define the styles for the color bar
const colorBarStyles = {
    display: "flex",
    justifyContent: "space-between",
    height: "3px",
};

// Define the color array
const colors = [
    Colors.yellow.main,
    Colors.green.main,
    Colors.red.main,
    Colors.blue.main,
    Colors.purple.main,
    Colors.pink.main,
];

// Functional component for the TopColorBar
const TopColorBar = () => {
    return (
        <Box sx={colorBarStyles}>
            {Array.from({ length: 12 }, (_, index) => (
                <Box
                    key={index}
                    sx={{ flex: 1, bgcolor: colors[index % colors.length] }}
                />
            ))}
        </Box>
    );
};

export default TopColorBar;
