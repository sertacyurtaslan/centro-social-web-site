import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../../../../data/firebase/FirebaseConfig';
import NewsItem from './NewsItem';
import Type from "../../../../../theme/Type";
import Color from "../../../../../theme/Color";
import { Features } from '../../../../../assets/features/Features';
import { useLanguage } from '../../../../../context/LanguageContext';

interface NewsItemData {
    id?: string;
    image: string;
    chipLabel: string;
    chipColor: string;
    title: string;
    description: string;
    link: string;
    buttonText: string;
}

const NewsSection: React.FC = () => {
    const { language } = useLanguage();
    const [newsItems, setNewsItems] = useState<NewsItemData[]>([]);

    useEffect(() => {
        const initializeNews = async () => {
            try {
                // Check if news collection is empty
                const querySnapshot = await getDocs(collection(db, 'news'));
                
                if (querySnapshot.empty) {
                    // If empty, add Features.NEWS items to Firestore
                    const newsRef = collection(db, 'news');
                    for (const item of Features.NEWS.items) {
                        await addDoc(newsRef, item);
                    }
                    
                    // Fetch again to get items with IDs
                    const newSnapshot = await getDocs(collection(db, 'news'));
                    const items = newSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    } as NewsItemData));
                    setNewsItems(items);
                } else {
                    // If not empty, just get the existing items
                    const items = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    } as NewsItemData));
                    setNewsItems(items);
                }
            } catch (error) {
                console.error('Error initializing news:', error);
            }
        };

        initializeNews();
    }, []);

    return (
        <Box pt={9} pb={7} id="noticias">
            <Box maxWidth="lg" mx="auto">
                {/* Section Title */}
                <Box display="flex" justifyContent="center" flexDirection="row" mb={4}>
                    <Typography sx={{ typography: Type.typography.displayLarge, color: Color.red.main }} >
                        {Features.NEWS.title[language]}
                    </Typography>
                </Box>

                <Box sx={{height:"30px"}}
                />

                {/* News Items Grid */}
                <Grid container spacing={5} justifyContent="center">
                    {newsItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id || index}>
                            <NewsItem {...item} />
                        </Grid>
                    ))}
                </Grid>

                {/* 'See More' Button */}
                <Box textAlign="center" mt={4}>
                    <Button variant="contained" sx={{ textTransform: 'uppercase', color: Color.blue.main }}>
                        <Typography sx={{color:Color.white.main}}>
                            {Features.NEWS.seeMore[language]}
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default NewsSection;
