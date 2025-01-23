import React, {useEffect, useState, useRef} from 'react';
import {Box, Container, useTheme, useMediaQuery} from '@mui/material';
import CarouselSlide from "./head/CarouselSlide";
import img1 from '../../../../assets/img/banner/slider-1/img-1.jpg';
import img2 from '../../../../assets/img/banner/slider-1/img-2.jpg';
import img3 from '../../../../assets/img/banner/slider-1/img-3.jpg';
import img4 from '../../../../assets/img/banner/slider-1/img-4.jpg';
import TopColorBar from "./head/TopColorBar";
import TopAppBar from "./head/TopAppBar";
import TopNavBar from "./head/TopNavBar";
import {AppThemeProvider} from "../../../../theme/Theme";
import CardGrid from "./head/CardGrid";
import {Features} from "../../../../assets/features/Features";
import ParallaxBox from "./body/ParallaxBox";
import SocialResponses from "./body/SocialResponses";
import LoadingOverlay from "./head/LoadingOverlay";
import imgBackground from '../../../../assets/img/background/background_convocatoria.jpg';
import imgBackground2 from '../../../../assets/img/background/background-img-1.jpg';
import imgBackground3 from '../../../../assets/img/background/acarrinhar.jpg';
import {Article, EmojiTransportation, MonitorHeart} from "@mui/icons-material";
import ProjectsSection from "./body/ProjectsSection";
import CounterSection from "./body/CounterSection";
import NewsSection from "./body/NewsSection";
import ContactSection from "./body/ContactSection";
import FooterSection from "../../components/FooterSection";
import User from "../../../../domain/model/User";
import { auth } from '../../../../data/firebase/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { firestore } from '../../../../data/firebase/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import CopyrightSection from '../../components/CopyrightSection';

const HomePage: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<{
        userName: string | null;
        email: string | null;
        uid: string;
    } | null>(null);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const docRef = doc(firestore, 'users', user.uid);
                    const docSnap = await getDoc(docRef);
                    
                    if (docSnap.exists()) {
                        const userData = docSnap.data() as User;
                        setCurrentUser({
                            userName: userData.userName || '',
                            email: userData.userEmail || '',
                            uid: user.uid
                        });
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setCurrentUser(null);
                }
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <AppThemeProvider mode={"light"}>
            <Box sx={{ 
                minHeight: '100vh',
                overflow: 'hidden'
            }}>
                {/* Header Section - Sticky */}
                <Box sx={{ 
                    position: 'sticky',
                    top: 0,
                    zIndex: 1100,
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: adds subtle shadow
                }}>
                    <TopColorBar/>
                    <TopAppBar currentUser={currentUser} />
                    <TopNavBar/>

                </Box>


                {/* Main Content Container */}
                <Box>
                    {/* Preloader */}
                    {loading && (<LoadingOverlay/> )}

                    {/* Content sections */}
                    <Box>
                        {/* Image Carousel */}
                        <CarouselSlide
                            autoSlide={true}
                            autoSlideInterval={7500}
                            children={[img1, img2, img3, img4]}
                            texts={Features.CAROUSEL}
                            cardGridComponent={<CardGrid/>}
                        />

                        {/* First Parallax - Responsive */}
                        <Box sx={{ mt: { xs: 2, sm: 3, md: 4 } }}>
                            <ParallaxBox
                                title={Features.FIRST_PARALLAX.title}
                                subtitle={Features.FIRST_PARALLAX.subTitle}
                                buttonLink={Features.FIRST_PARALLAX.buttonLink}
                                buttonText={Features.FIRST_PARALLAX.buttonText}
                                buttonIcon={<Article/>}
                                backgroundImage={imgBackground}
                            />
                        </Box>

                        {/* Social Responses - Responsive */}
                        <Container maxWidth="lg" sx={{ 
                            py: { xs: 4, sm: 6, md: 8 },
                            px: { xs: 2, sm: 3, md: 4 }
                        }}>
                            <SocialResponses/>
                        </Container>

                        {/* Second Parallax - Responsive */}
                        <ParallaxBox
                            title={Features.SECOND_PARALLAX.title}
                            subtitle={Features.SECOND_PARALLAX.subTitle}
                            buttonLink={Features.SECOND_PARALLAX.buttonLink}
                            buttonText={Features.SECOND_PARALLAX.buttonText}
                            buttonIcon={<MonitorHeart/>}
                            backgroundImage={imgBackground2}
                        />

                        {/* Projects Section - Responsive */}
                        <Container maxWidth="lg" sx={{ 
                            py: { xs: 4, sm: 6, md: 8 },
                            px: { xs: 2, sm: 3, md: 4 }
                        }}>
                            <ProjectsSection/>
                        </Container>

                        {/* Counter Section - Responsive */}
                        <Box sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
                            <CounterSection/>
                        </Box>

                        {/* News Section - Responsive */}
                        <Container maxWidth="lg" sx={{ 
                            py: { xs: 4, sm: 6, md: 8 },
                            px: { xs: 2, sm: 3, md: 4 }
                        }}>
                            <NewsSection/>
                        </Container>

                        {/* Third Parallax - Responsive */}
                        <ParallaxBox
                            title={Features.THIRD_PARALLAX.title}
                            subtitle={Features.THIRD_PARALLAX.subTitle}
                            buttonLink={Features.THIRD_PARALLAX.buttonLink}
                            buttonText={Features.THIRD_PARALLAX.buttonText}
                            buttonIcon={<EmojiTransportation/>}
                            backgroundImage={imgBackground3}
                        />

                        {/* Contact Section - Responsive */}
                        <Container maxWidth="lg" sx={{ 
                            py: { xs: 4, sm: 6, md: 8 },
                            px: { xs: 2, sm: 3, md: 4 }
                        }}>
                            <ContactSection/>
                        </Container>

                        {/* Footer - Only show on desktop */}
                        {isDesktop && (
                            <Box sx={{ mt: { sm: 6, md: 8 } }}>
                                <FooterSection/>
                            </Box>
                        )}

                        {/* Copyright Section - Always visible */}
                        <CopyrightSection/>
                    </Box>
                </Box>
            </Box>
        </AppThemeProvider>
    );
};

export default HomePage;
