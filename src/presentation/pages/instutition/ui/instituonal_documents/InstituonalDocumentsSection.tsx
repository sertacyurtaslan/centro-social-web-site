import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Link,
    Box,
    Button
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Features } from "../../../../../assets/features/Features";
import { Download as DownloadIcon } from "@mui/icons-material";
import Type from "../../../../../theme/Type";

const documents = Features.INSTITUONAL_DOCUMENTS;

export const InstituonalDocumentsSection: React.FC = () => {
    return (
        <Box sx={{ 
            padding: "32px",
            maxWidth: "1000px", 
            margin: "0 auto",
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
        }}>
            {documents.map((docCategory, index) => (
                <Accordion
                    key={index}
                    sx={{
                        marginBottom: "20px",
                        borderRadius: "12px !important",
                        overflow: "hidden",
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
                        },
                        '&:before': {
                            display: 'none'
                        }
                    }}
                >
                    <AccordionSummary
                        expandIcon={
                            <Box
                                sx={{
                                    backgroundColor: "white",
                                    borderRadius: "50%",
                                    padding: "4px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'rotate(180deg)'
                                    }
                                }}
                            >
                                <ExpandMoreIcon />
                            </Box>
                        }
                        aria-controls={`panel${index}a-content`}
                        id={`panel${index}a-header`}
                        sx={{
                            backgroundColor: docCategory.bgColor || "#f0f0f0",
                            padding: "8px 24px",
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: `${docCategory.bgColor}ee` || "#e0e0e0"
                            }
                        }}
                    >
                        <Typography 
                            sx={{ 
                                typography: Type.typography.bodyLarge, 
                                fontWeight: "bold", 
                                color: "white",
                                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                            }}
                        >
                            {docCategory.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ padding: "24px" }}>
                        <TableContainer
                            component={Paper}
                            sx={{
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                            }}
                        >
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontSize: "16px", fontWeight: "bold", backgroundColor: '#f5f5f5' }}>
                                            Documento
                                        </TableCell>
                                        <TableCell sx={{ fontSize: "16px", fontWeight: "bold", backgroundColor: '#f5f5f5' }}>
                                            Descarregar
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {docCategory.files.length > 0 ? (
                                        docCategory.files.map((file, idx) => (
                                            <TableRow
                                                key={idx}
                                                sx={{
                                                    backgroundColor: idx % 2 === 0 ? "#f9f9f9" : "#ffffff",
                                                    transition: 'background-color 0.3s ease',
                                                    '&:hover': {
                                                        backgroundColor: '#f0f7ff'
                                                    }
                                                }}
                                            >
                                                <TableCell>{file.name}</TableCell>
                                                <TableCell>
                                                    {file.link ? (
                                                        <Link href={file.link} target="_blank" underline="none">
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                startIcon={<DownloadIcon />}
                                                                sx={{
                                                                    textTransform: "none",
                                                                    padding: "8px 20px",
                                                                    fontWeight: 500,
                                                                    borderRadius: "8px",
                                                                    transition: 'all 0.3s ease',
                                                                    '&:hover': {
                                                                        transform: 'translateY(-2px)',
                                                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                                                                    }
                                                                }}
                                                            >
                                                                Baixar
                                                            </Button>
                                                        </Link>
                                                    ) : (
                                                        <Typography 
                                                            sx={{ 
                                                                color: "text.secondary",
                                                                fontStyle: 'italic'
                                                            }}
                                                        >
                                                            Indisponível
                                                        </Typography>
                                                    )}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={2}>
                                                <Typography 
                                                    sx={{ 
                                                        color: "text.secondary",
                                                        textAlign: 'center',
                                                        py: 2,
                                                        fontStyle: 'italic'
                                                    }}
                                                >
                                                    Sem documentos disponíveis.
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};
