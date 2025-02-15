import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Grid,
    IconButton,
    Card,
    CardContent,
    CardMedia,
    Typography,
    CircularProgress
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../../../../data/firebase/FirebaseConfig';
import { Volunteer } from '../../../../../types/VolunteerTypes';

export const VolunteersManagement = () => {
    const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        descriptionPt: '',
        descriptionEn: '',
        photo: null as File | null,
        photoUrl: ''
    });

    const fetchVolunteers = async () => {
        const volunteersRef = collection(db, 'volunteers');
        const q = query(volunteersRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        const volunteersData = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate()
        })) as Volunteer[];
        setVolunteers(volunteersData);
    };

    useEffect(() => {
        fetchVolunteers();
    }, []);

    const handleOpen = (volunteer?: Volunteer) => {
        if (volunteer) {
            setSelectedVolunteer(volunteer);
            setFormData({
                name: volunteer.name,
                descriptionPt: volunteer.description.pt,
                descriptionEn: volunteer.description.en,
                photo: null,
                photoUrl: volunteer.photoUrl
            });
        } else {
            setSelectedVolunteer(null);
            setFormData({
                name: '',
                descriptionPt: '',
                descriptionEn: '',
                photo: null,
                photoUrl: ''
            });
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedVolunteer(null);
        setFormData({
            name: '',
            descriptionPt: '',
            descriptionEn: '',
            photo: null,
            photoUrl: ''
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let photoUrl = formData.photoUrl;

            if (formData.photo) {
                const storageRef = ref(storage, `volunteers/${formData.photo.name}`);
                const uploadResult = await uploadBytes(storageRef, formData.photo);
                photoUrl = await getDownloadURL(uploadResult.ref);
            }

            const volunteerData = {
                name: formData.name,
                description: {
                    pt: formData.descriptionPt,
                    en: formData.descriptionEn
                },
                photoUrl,
                createdAt: new Date()
            };

            if (selectedVolunteer) {
                await updateDoc(doc(db, 'volunteers', selectedVolunteer.id), volunteerData);
            } else {
                await addDoc(collection(db, 'volunteers'), volunteerData);
            }

            await fetchVolunteers();
            handleClose();
        } catch (error) {
            console.error('Error saving volunteer:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (volunteer: Volunteer) => {
        if (window.confirm('Are you sure you want to delete this volunteer?')) {
            try {
                await deleteDoc(doc(db, 'volunteers', volunteer.id));
                if (volunteer.photoUrl) {
                    const storageRef = ref(storage, volunteer.photoUrl);
                    await deleteObject(storageRef);
                }
                await fetchVolunteers();
            } catch (error) {
                console.error('Error deleting volunteer:', error);
            }
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h5">Manage Volunteers</Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => handleOpen()}
                >
                    Add Volunteer
                </Button>
            </Box>

            <Grid container spacing={3}>
                {volunteers.map((volunteer) => (
                    <Grid item xs={12} sm={6} md={4} key={volunteer.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={volunteer.photoUrl}
                                alt={volunteer.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{volunteer.name}</Typography>
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                                    <IconButton onClick={() => handleOpen(volunteer)}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(volunteer)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    {selectedVolunteer ? 'Edit Volunteer' : 'Add New Volunteer'}
                </DialogTitle>
                <DialogContent>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Description (Portuguese)"
                                    value={formData.descriptionPt}
                                    onChange={(e) => setFormData({ ...formData, descriptionPt: e.target.value })}
                                    multiline
                                    rows={4}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Description (English)"
                                    value={formData.descriptionEn}
                                    onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                                    multiline
                                    rows={4}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    fullWidth
                                >
                                    Upload Photo
                                    <input
                                        type="file"
                                        hidden
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) {
                                                setFormData({ ...formData, photo: file });
                                            }
                                        }}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Save'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}; 