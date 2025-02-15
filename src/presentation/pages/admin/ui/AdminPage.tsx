import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button
} from '@mui/material';
import {
    Edit,
    Delete,
    Add,
    LogoutRounded
} from '@mui/icons-material';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../data/firebase/FirebaseConfig';
import Color from '../../../../theme/Color';
import { useNavigate } from 'react-router-dom';
import { NewsItem } from './news/NewsItem';
import { VolunteersManagement } from './volunteers/VolunteersManagement';
import EditNewsDialog from './news/EditNewsDialog';

const AdminPage = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedItem, setSelectedItem] = useState<NewsItem | null>(null);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchNewsItems();
    }, []);

    const fetchNewsItems = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'news'));
            const items = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as NewsItem));
            setNewsItems(items);
        } catch (error) {
            console.error('Error fetching news items:', error);
        }
    };

    const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleOpenDialog = (item?: NewsItem) => {
        setSelectedItem(item || null);
        setPreviewUrl(item?.image || '');
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedItem(null);
        setSelectedImage(null);
        setPreviewUrl('');
    };

    const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        
        try {
            let imageUrl = selectedItem?.image || '';

            if (selectedImage) {
                const storageRef = ref(storage, `news/${selectedImage.name}`);
                const snapshot = await uploadBytes(storageRef, selectedImage);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            const newsData = {
                image: imageUrl,
                chipLabel: formData.get('chipLabel') as string,
                chipColor: formData.get('chipColor') as string,
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                link: formData.get('link') as string,
                buttonText: formData.get('buttonText') as string,
            };

            if (selectedItem?.id) {
                await updateDoc(doc(db, 'news', selectedItem.id), newsData);
            } else {
                await addDoc(collection(db, 'news'), newsData);
            }

            handleCloseDialog();
            fetchNewsItems();
        } catch (error) {
            console.error('Error saving news item:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this news item?')) {
            try {
                await deleteDoc(doc(db, 'news', id));
                fetchNewsItems();
            } catch (error) {
                console.error('Error deleting news item:', error);
            }
        }
    };

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.removeItem('adminSession');
        // Clear any other admin-related data
        setNewsItems([]);
        setSelectedItem(null);
        setOpenDialog(false);
        // Redirect to home page
        navigate('/', { replace: true });
    };

    return (
        <Box p={3}>
            {/* News Section */}
            <Box mb={6}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <Typography variant="h4" color={Color.purple.main}>
                        Manage News
                    </Typography>
                    <Box display="flex" gap={2}>
                        <Button
                            variant="contained"
                            startIcon={<Add />}
                            onClick={() => handleOpenDialog()}
                            sx={{ 
                                bgcolor: Color.purple.main,
                                '&:hover': { bgcolor: Color.purple.main }
                            }}
                        >
                            Add News Item
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            startIcon={<LogoutRounded />}
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    </Box>
                </Box>

                <Grid container spacing={3}>
                    {newsItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <Box 
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{ 
                                        width: '100%',
                                        height: 200,
                                        objectFit: 'cover'
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Box mt={2} display="flex" gap={1}>
                                        <Button
                                            variant="contained"
                                            startIcon={<Edit />}
                                            onClick={() => handleOpenDialog(item)}
                                            sx={{ bgcolor: Color.blue.main }}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            startIcon={<Delete />}
                                            onClick={() => handleDelete(item.id || '')}
                                        >
                                            Delete
                                        </Button>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Volunteers Section */}
            <Box>
                <Typography variant="h4" color={Color.purple.main} mb={3}>
                    Manage Volunteers
                </Typography>
                <VolunteersManagement />
            </Box>

            <EditNewsDialog
                open={openDialog}
                onClose={handleCloseDialog}
                onSave={handleSave}
                selectedItem={selectedItem}
                previewUrl={previewUrl}
                handleImageSelect={handleImageSelect}
            />
        </Box>
    );
};

export default AdminPage; 