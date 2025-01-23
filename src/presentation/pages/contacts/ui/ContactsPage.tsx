import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {AppThemeProvider} from "../../../../theme/Theme";
import LoadingOverlay from "../../home/ui/head/LoadingOverlay";
import TopColorBar from "../../home/ui/head/TopColorBar";
import TopAppBar from "../../home/ui/head/TopAppBar";
import TopNavBar from "../../home/ui/head/TopNavBar";
import {TopImageLine} from "../../components/TopImageLine";
import ContactsSection from "./ContactsSection";
import FooterSection from "../../components/FooterSection";
import {Features} from "../../../../assets/features/Features";
import CopyrightSection from "../../components/CopyrightSection";

export const ContactsPage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const { topImage, breadcrumbs } = Features.CONTACTS;

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

                <ContactsSection/>

                {/* Footer */}
                <CopyrightSection/>
            </Box>
        </AppThemeProvider>
    );
};
