import React, {useEffect, useState, useRef, Suspense, lazy} from 'react';
import {Box, Container, useTheme, useMediaQuery, Fab, Zoom} from '@mui/material';
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
import LoadingOverlay from "./head/LoadingOverlay";
import imgBackground from '../../../../assets/img/background/background_convocatoria.jpg';
import imgBackground2 from '../../../../assets/img/background/background-img-1.jpg';
import imgBackground3 from '../../../../assets/img/background/acarrinhar.jpg';
import {Article, EmojiTransportation, MonitorHeart, KeyboardArrowUp} from "@mui/icons-material";
import FooterSection from "../../components/FooterSection";
import User from "../../../../domain/model/User";
import { auth } from '../../../../data/firebase/FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { firestore } from '../../../../data/firebase/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import CopyrightSection from '../../components/CopyrightSection';
import LoginDialog from './auth/LoginDialog';
import RegisterDialog from './auth/RegisterDialog';
import { useLanguage } from '../../../../context/LanguageContext';
import { Language } from '../../../../types/LanguageTypes';

const NewsSection = lazy(() => import('./body/NewsSection'));
const ProjectsSection = lazy(() => import('./body/ProjectsSection'));
const CounterSection = lazy(() => import('./body/CounterSection'));
const SocialResponses = lazy(() => import('./body/SocialResponses'));
const ContactSection = lazy(() => import('./body/ContactSection'));

const HomePage: React.FC = () => {
    const { language } = useLanguage() as { language: Language };
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<{
        userName: string | null;
        email: string | null;
        uid: string;
    } | null>(null);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showFullHeader, setShowFullHeader] = useState(true);
    const lastScrollY = useRef(0);

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

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show/hide scroll to top button
            setShowScrollTop(currentScrollY > 400);

            // Show full header when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
                setShowFullHeader(false); // Hide when scrolling down
            } else {
                setShowFullHeader(true);  // Show when scrolling up
            }
            
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSwitchToRegister = () => {
        setOpenLoginDialog(false);
        setOpenRegisterDialog(true);
    };

    const handleSwitchToLogin = () => {
        setOpenRegisterDialog(false);
        setOpenLoginDialog(true);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {openLoginDialog && (
                <LoginDialog 
                    onClose={() => setOpenLoginDialog(false)}
                    onSwitchToRegister={handleSwitchToRegister}
                />
            )}
            {openRegisterDialog && (
                <RegisterDialog 
                    onClose={() => setOpenRegisterDialog(false)}
                    onSwitchToLogin={handleSwitchToLogin}
                />
            )}
            <AppThemeProvider mode={"light"}>
                <Box sx={{ 
                    minHeight: '100vh',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {/* Static Header Elements with transition */}
                    <Box sx={{
                        position: 'fixed',
                        top: showFullHeader ? 0 : { xs: '-36px', sm: '-60px' },
                        left: 0,
                        right: 0,
                        zIndex: 1100,
                        backgroundColor: 'white',
                        transition: 'top 0.3s ease-in-out',
                    }}>
                        <TopColorBar/>
                        <TopAppBar />
                    </Box>

                    {/* Always Fixed Navigation Bar */}
                    <Box sx={{
                        position: 'fixed',
                        top: showFullHeader ? { xs: '36px', sm: '60px' } : 0,
                        left: 0,
                        right: 0,
                        zIndex: 1100,
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        transition: 'top 0.3s ease-in-out',
                    }}>
                        <TopNavBar/>
                    </Box>

                    {/* Main Content Container */}
                    <Box sx={{
                        pt: {
                            xs: '126px',
                            sm: '186px'
                        }
                    }}>
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
                                    title={Features.FIRST_PARALLAX.title[language]}
                                    subtitle={Features.FIRST_PARALLAX.subTitle[language]}
                                    buttonLink={Features.FIRST_PARALLAX.buttonLink}
                                    buttonText={Features.FIRST_PARALLAX.buttonText[language]}
                                    buttonIcon={<Article/>}
                                    backgroundImage={imgBackground}
                                />
                            </Box>

                            {/* Social Responses - Responsive */}
                            <Container maxWidth="lg" sx={{ 
                                py: { xs: 4, sm: 6, md: 8 },
                                px: { xs: 2, sm: 3, md: 4 }
                            }}>
                                <Suspense fallback={<LoadingOverlay />}>
                                    <SocialResponses />
                                </Suspense>
                            </Container>

                            {/* Second Parallax - Responsive */}
                            <ParallaxBox
                                title={Features.SECOND_PARALLAX.title[language]}
                                subtitle={Features.SECOND_PARALLAX.subTitle[language]}
                                buttonLink={Features.SECOND_PARALLAX.buttonLink}
                                buttonText={Features.SECOND_PARALLAX.buttonText[language]}
                                buttonIcon={<MonitorHeart/>}
                                backgroundImage={imgBackground2}
                            />

                            {/* Projects Section - Responsive */}
                            <Container maxWidth="lg" sx={{ 
                                py: { xs: 4, sm: 6, md: 8 },
                                px: { xs: 2, sm: 3, md: 4 }
                            }}>
                                <Suspense fallback={<LoadingOverlay />}>
                                    <ProjectsSection />
                                </Suspense>
                            </Container>

                            {/* Counter Section - Responsive */}
                            <Box sx={{ my: { xs: 4, sm: 6, md: 8 } }}>
                                <Suspense fallback={<LoadingOverlay />}>
                                    <CounterSection />
                                </Suspense>
                            </Box>

                            {/* News Section - Responsive */}
                            <Container maxWidth="lg" sx={{ 
                                py: { xs: 4, sm: 6, md: 8 },
                                px: { xs: 2, sm: 3, md: 4 }
                            }}>
                                <Suspense fallback={<LoadingOverlay />}>
                                    <NewsSection />
                                </Suspense>
                            </Container>

                            {/* Third Parallax - Responsive */}
                            <ParallaxBox
                                title={Features.THIRD_PARALLAX.title[language]}
                                subtitle={Features.THIRD_PARALLAX.subTitle[language]}
                                buttonLink={Features.THIRD_PARALLAX.buttonLink}
                                buttonText={Features.THIRD_PARALLAX.buttonText[language]}
                                buttonIcon={<EmojiTransportation/>}
                                backgroundImage={imgBackground3}
                            />

                            {/* Contact Section - Responsive */}
                            <Container maxWidth="lg" sx={{
                                py: { xs: 4, sm: 6, md: 8 },
                                px: { xs: 2, sm: 3, md: 4 }
                            }}>
                                <Suspense fallback={<LoadingOverlay />}>
                                    <ContactSection />
                                </Suspense>
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

                    {/* Scroll to Top Button */}
                    <Zoom in={showScrollTop}>
                        <Fab
                            color="primary"
                            size="large"
                            onClick={scrollToTop}
                            sx={{
                                position: 'fixed',
                                bottom: 16,
                                right: 16,
                                zIndex: 1000,
                                bgcolor: theme => theme.palette.primary.main,
                                '&:hover': {
                                    bgcolor: theme => theme.palette.primary.dark,
                                },
                                '@media (max-width: 600px)': {
                                    bottom: 72,
                                    right: 16,
                                }
                            }}
                            aria-label="scroll to top"
                        >
                            <KeyboardArrowUp />
                        </Fab>
                    </Zoom>
                </Box>
            </AppThemeProvider>
        </>
    );
};

export default HomePage;
