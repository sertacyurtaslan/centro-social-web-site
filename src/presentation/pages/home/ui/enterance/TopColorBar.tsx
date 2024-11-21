import React from "react";
import { Box } from "@mui/material";
import Colors from "../../../../../theme/Color";

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

const TopColorBar: React.FC = () => {
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
