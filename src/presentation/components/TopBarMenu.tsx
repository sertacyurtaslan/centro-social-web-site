import React, { useState } from "react";
import { MenuItem, ListItemText, Button, Typography, Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import Type from "../../theme/Type";

interface IProps {
    menuIcon?: SvgIconComponent;
    menuColor?: string;
    menuName: string;
    menuItems?: string[];
}

const TopBarMenu: React.FC<IProps> = ({ menuIcon: MenuIcon, menuColor, menuName, menuItems }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = () => {
        if (menuItems != null) {
            setMenuOpen(true);
        }
    };

    const handleMouseLeave = () => {
        setMenuOpen(false);
    };

    return (
        <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                position: "relative",
            }}
        >
            <Button
                sx={{
                    backgroundColor: menuColor,
                    color: "#fff",
                    width: { xs: "70px", sm: "80px", md: "110px" },
                    height: { xs: "40px", md: "50px" },
                    fontWeight: "bold",
                    fontSize: { xs: "12px", md: Type.typography.buttonLarge.fontSize },
                    textTransform: "none",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                        backgroundColor: `${menuColor}CC`,
                    },
                }}
            >
                {MenuIcon && <MenuIcon sx={{ fontSize: { xs: "20px", md: "24px" }, marginRight: "4px" }} />}
                <Typography sx={{ fontSize: { xs: "10px", md: "12.5px" }, fontWeight: "bold", marginRight: "4px" }}>
                    {menuName}
                </Typography>
            </Button>
            {menuOpen && (
                <Box
                    sx={{
                        position: "absolute",
                        backgroundColor: "white",
                        borderRadius: "3px",
                        boxShadow: 2,
                        paddingRight: 2,
                        paddingLeft: 0.5,
                        paddingTop: 1,
                        paddingBottom: 1,
                        top: "100%",
                        left: 0,
                        zIndex: 1,
                    }}
                >
                    {/* The line on top of the box */}
                    <Box
                        sx={{
                            height: "5px",
                            backgroundColor: menuColor,
                            width: "100%",
                            borderRadius: "3px 3px 0 0",
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                    />
                    {menuItems?.map((item, index) => (
                        <MenuItem
                            key={index}
                            onClick={handleMouseLeave}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                padding: 0,
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                            }}
                        >
                            <ListItemText
                                sx={{
                                    display: "inline-flex",
                                    padding: "4px 12px 4px 12px",
                                    borderRadius: "4px",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: menuColor,
                                        color: "#fff",
                                        transform: "translateX(10px)",
                                    },
                                }}
                            >
                                {item}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default TopBarMenu;
