import React from "react";
import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const CustomInputBox: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                boxShadow: 2,
                borderRadius: 1,
                overflow: "hidden",
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Email"
                fullWidth
                sx={{
                    backgroundColor: "white", // Set background color to white
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            border: "none", // Remove default border
                        },
                    },
                    "& .MuiInputBase-input": {
                        padding: "12px 14px", // Padding for input field
                    },
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                sx={{
                                    backgroundColor: "error.main",
                                    borderRadius: 0,
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "error.dark",
                                    },
                                }}
                            >
                                <CheckIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
};

export default CustomInputBox;
