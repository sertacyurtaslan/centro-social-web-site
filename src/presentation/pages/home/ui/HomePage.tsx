import React, {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import CarouselSlide from "./head/CarouselSlide";
import img1 from '../../../../../src/assets/img/banner/slider-1/img-1.jpg';
import img2 from '../../../../../src/assets/img/banner/slider-1/img-2.jpg';
import img3 from '../../../../../src/assets/img/banner/slider-1/img-3.jpg';
import img4 from '../../../../../src/assets/img/banner/slider-1/img-4.jpg';
import TopColorBar from "./head/TopColorBar";
import TopAppBar from "./head/TopAppBar";
import TopNavBar from "./head/TopNavBar";
import {AppThemeProvider} from "../../../../theme/Theme";
import CardGrid from "./head/CardGrid";
import {Features} from "../../../../data/feature/Features";
import ParallaxBox from "./body/ParallaxBox";
import SocialResponses from "./body/SocialResponses";
import LoadingOverlay from "./head/LoadingOverlay";
import imgBackground from '../../../../../src/assets/img/background/background_convocatoria.jpg';
import imgBackground2 from '../../../../../src/assets/img/background/background-img-1.jpg';

import {Article, MonitorHeart} from "@mui/icons-material";
import Projects from "./body/Projects";
import CounterSection from "./body/CounterSection";

const Header: React.FC = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <AppThemeProvider mode={"light"}>
            <Box>
                {/* Preloader */}
                {loading && (<LoadingOverlay/> )}

                {/* Header */}
                <TopColorBar/>

                {/* Top Bar */}
                <TopAppBar/>

                {/* Navigation Bar */}
                <TopNavBar/>

                {/* Image Carousel */}
                <CarouselSlide
                    autoSlide={true}
                    autoSlideInterval={7500}
                    children={[img1, img2, img3, img4]}
                    texts={Features.CAROUSEL}
                    cardGridComponent={<CardGrid/>}
                />

                {/* Parallax 1 */}
                <ParallaxBox
                    title= {Features.FIRST_PARALLAX.title}
                    subtitle={Features.FIRST_PARALLAX.subTitle}
                    buttonLink={Features.FIRST_PARALLAX.buttonLink}
                    buttonText={Features.FIRST_PARALLAX.buttonText}
                    buttonIcon={<Article/>}
                    backgroundImage={imgBackground}
                />

                {/* Social Responses */}
                <SocialResponses/>

                {/* Parallax 2 */}
                <ParallaxBox
                    title={Features.SECOND_PARALLAX.title}
                    subtitle={Features.SECOND_PARALLAX.subTitle}
                    buttonLink={Features.SECOND_PARALLAX.buttonLink}
                    buttonText={Features.SECOND_PARALLAX.buttonText}
                    buttonIcon={<MonitorHeart/>}
                    backgroundImage={imgBackground2}
                />

                {/* Projects */}
                <Projects/>

                <CounterSection/>
            </Box>
        </AppThemeProvider>
    );
};

export default Header;
