import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { AppThemeProvider } from "../../../../../theme/Theme";
import TopColorBar from "../../../home/ui/head/TopColorBar";
import TopAppBar from "../../../home/ui/head/TopAppBar";
import TopNavBar from "../../../home/ui/head/TopNavBar";
import LoadingOverlay from "../../../home/ui/head/LoadingOverlay";
import FooterSection from "../../../components/FooterSection";
import { TopImageLine } from "../../../components/TopImageLine";
import { Features } from "../../../../../assets/features/Features";
import {Escolhas7gSection} from "./Escolhas7gSection";

export const Escolhas7gPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const { topImage, breadcrumbs } = Features.ESCOLHAS7G;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <AppThemeProvider mode={"light"}>
            <Box>
                {/* Preloader */}
                {loading && <LoadingOverlay />}

                {/* Header */}
                <TopColorBar />

                {/* Top Bar */}
                <TopAppBar />

                {/* Navigation Bar */}
                <TopNavBar />

                {/* Content */}
                <TopImageLine topImage={topImage} breadcrumbs={breadcrumbs} />

                <Escolhas7gSection/>

                {/* Footer */}
                <FooterSection />
            </Box>
        </AppThemeProvider>
    );
};
