import React, { useState } from "react";
import { MenuItem, ListItemText, Button, Typography, Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import Type from "../../../../../theme/Type";

interface IProps {
    menuIcon?: SvgIconComponent;
    menuColor?: string;
    menuName: string;
    menuItems?: string[];
    onClick: (menuItem?: string) => void; // onClick function for menu item
}

const TopBarMenu: React.FC<IProps> = ({ menuIcon: MenuIcon, menuColor, menuName, menuItems, onClick }) => {
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
                    width: { xs: "40px", sm: "80px", md: "110px" },
                    height: { xs: "40px", sm: "40px", md: "50px" },
                    fontWeight: "bold",
                    fontSize: { xs: "10px", sm: "12px", md: Type.typography.buttonLarge.fontSize },
                    textTransform: "none",
                    borderRadius: { xs: "4px", sm: "8px" },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { xs: "4px 6px", sm: "6px 8px", md: "8px 16px" },
                    minWidth: { xs: "50px", sm: "70px", md: "110px" },
                    "&:hover": {
                        backgroundColor: `${menuColor}CC`,
                    },
                }}
                onClick={() => onClick()}
            >
                {MenuIcon && (
                    <MenuIcon 
                        sx={{ 
                            fontSize: { xs: "16px", sm: "20px", md: "24px" },
                            marginRight: { xs: "2px", sm: "4px" },
                            display: { xs: 'none', sm: 'block' }
                        }} 
                    />
                )}
                <Typography 
                    sx={{ 
                        fontSize: { xs: "9px", sm: "10px", md: "12.5px" },
                        fontWeight: "bold",
                        marginRight: { xs: "2px", sm: "4px" }
                    }}
                >
                    {menuName}
                </Typography>
            </Button>
            {menuOpen && (
                <Box
                    sx={{
                        position: "absolute",
                        backgroundColor: "white",
                        borderRadius: { xs: "2px", sm: "3px" },
                        boxShadow: 2,
                        paddingRight: { xs: 1, sm: 2 },
                        paddingLeft: { xs: 0.25, sm: 0.5 },
                        paddingTop: { xs: 0.5, sm: 1 },
                        paddingBottom: { xs: 0.5, sm: 1 },
                        top: "100%",
                        left: 0,
                        zIndex: 1,
                        width: { xs: '120px', sm: 'auto' },
                    }}
                >
                    {/* The line on top of the box */}
                    <Box
                        sx={{
                            height: { xs: "3px", sm: "5px" },
                            backgroundColor: menuColor,
                            width: "100%",
                            borderRadius: { xs: "2px 2px 0 0", sm: "3px 3px 0 0" },
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                    />
                    {/* Only render menu items if they are available */}
                    {menuItems?.map((item, index) => (
                        <MenuItem
                            key={index}
                            onClick={() => onClick(item)}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                padding: 0,
                                minHeight: { xs: '32px', sm: '40px' },
                                "&:hover": {
                                    backgroundColor: "transparent",
                                },
                            }}
                        >
                            <ListItemText
                                sx={{
                                    display: "inline-flex",
                                    padding: { xs: "2px 8px", sm: "4px 12px" },
                                    borderRadius: { xs: "2px", sm: "4px" },
                                    transition: "transform 0.3s ease",
                                    "& .MuiTypography-root": {
                                        fontSize: { xs: '11px', sm: '14px' },
                                    },
                                    "&:hover": {
                                        backgroundColor: menuColor,
                                        color: "#fff",
                                        transform: { xs: "translateX(5px)", sm: "translateX(10px)" },
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
