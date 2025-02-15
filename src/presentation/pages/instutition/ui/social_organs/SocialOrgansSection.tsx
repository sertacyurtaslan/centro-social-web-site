import React from "react";
import { Box, Container, Grid, Paper, Typography, Divider } from "@mui/material";
import { Features } from "../../../../../assets/features/Features";
import { useLanguage } from '../../../../../context/LanguageContext';
import { Language } from '../../../../../types/LanguageTypes';

const socialOrgans = Features.SOCIAL_ORGANS;

export const SocialOrgansSection: React.FC = () => {
    const { language } = useLanguage() as { language: Language };

    return (
        <Box sx={{ padding: "3rem", backgroundColor: "#f4f6f9" }}>
            <Container>
                {/* Management Section */}
                <Grid container spacing={4} justifyContent="center">
                    {/* Direção */}
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: "10px", backgroundColor: "#ffffff" }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#00796b" }}>
                                {socialOrgans.management.direcao.title[language]}
                            </Typography>
                            <Divider sx={{ marginBottom: "1rem" }} />
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: "500" }}>
                                <b>Presidente:</b> {socialOrgans.management.direcao.presidente}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Vice-Presidentes:</b>
                            </Typography>
                            {socialOrgans.management.direcao.vicePresidentes.map((vice, index) => (
                                <Typography key={index} variant="body1" gutterBottom>
                                    {vice}
                                </Typography>
                            ))}
                            <Typography variant="body1" gutterBottom>
                                <b>Tesoureiro:</b> {socialOrgans.management.direcao.tesoureiro}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Secretário:</b> {socialOrgans.management.direcao.secretario}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Vogais:</b>
                            </Typography>
                            {socialOrgans.management.direcao.vogais.map((vogal, index) => (
                                <Typography key={index} variant="body1" gutterBottom>
                                    {vogal}
                                </Typography>
                            ))}
                        </Paper>
                    </Grid>

                    {/* Mesa da Assembleia Geral */}
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: "10px", backgroundColor: "#ffffff" }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#00796b" }}>
                                {socialOrgans.management.mesaAssembleiaGeral.title[language]}
                            </Typography>
                            <Divider sx={{ marginBottom: "1rem" }} />
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: "500" }}>
                                <b>Presidente:</b> {socialOrgans.management.mesaAssembleiaGeral.presidente}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Vice-Presidente:</b> {socialOrgans.management.mesaAssembleiaGeral.vicePresidente}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Secretário:</b> {socialOrgans.management.mesaAssembleiaGeral.secretario}
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* Conselho Fiscal */}
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={6} sx={{ padding: 3, borderRadius: "10px", backgroundColor: "#ffffff" }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", color: "#00796b" }}>
                                {socialOrgans.management.conselhoFiscal.title[language]}
                            </Typography>
                            <Divider sx={{ marginBottom: "1rem" }} />
                            <Typography variant="body1" gutterBottom sx={{ fontWeight: "500" }}>
                                <b>Presidente:</b> {socialOrgans.management.conselhoFiscal.presidente}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Secretário:</b> {socialOrgans.management.conselhoFiscal.secretario}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                <b>Relator:</b> {socialOrgans.management.conselhoFiscal.relator}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
