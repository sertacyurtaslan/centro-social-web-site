import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Grid,
    Box,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import { Close, PhotoCamera } from '@mui/icons-material';
import Color from '../../../../../theme/Color';
import { NewsItem } from './NewsItem';

// Define available colors
const colorOptions = [
    { name: 'Red', value: Color.red.main },
    { name: 'Blue', value: Color.blue.main },
    { name: 'Green', value: Color.green.main },
    { name: 'Yellow', value: Color.yellow.main },
    { name: 'Purple', value: Color.purple.main },
    { name: 'Pink', value: Color.pink.main },
];

interface EditNewsDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    selectedItem: NewsItem | null;
    previewUrl: string;
    handleImageSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EditNewsDialog: React.FC<EditNewsDialogProps> = ({
    open,
    onClose,
    onSave,
    selectedItem,
    previewUrl,
    handleImageSelect
}) => {
    const [selectedColor, setSelectedColor] = useState(selectedItem?.chipColor || colorOptions[0].value);

    const handleColorChange = (event: any) => {
        setSelectedColor(event.target.value);
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <form onSubmit={onSave}>
                <DialogTitle sx={{ bgcolor: Color.purple.main, color: 'white' }}>
                    {selectedItem ? 'Edit News Item' : 'Add News Item'}
                    <IconButton
                        sx={{ position: 'absolute', right: 8, top: 8, color: 'white' }}
                        onClick={onClose}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ mt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box 
                                sx={{ 
                                    width: '100%',
                                    height: 200,
                                    border: '2px dashed grey',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 2,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {previewUrl ? (
                                    <Box 
                                        component="img"
                                        src={previewUrl}
                                        sx={{ 
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                ) : (
                                    <PhotoCamera sx={{ fontSize: 60, color: 'grey' }} />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        opacity: 0,
                                        cursor: 'pointer'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Chip Label"
                                name="chipLabel"
                                defaultValue={selectedItem?.chipLabel}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Chip Color</InputLabel>
                                <Select
                                    name="chipColor"
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                    required
                                    label="Chip Color"
                                >
                                    {colorOptions.map((color) => (
                                        <MenuItem 
                                            key={color.value} 
                                            value={color.value}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    borderRadius: '50%',
                                                    backgroundColor: color.value,
                                                    border: '1px solid rgba(0,0,0,0.1)'
                                                }}
                                            />
                                            {color.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Title"
                                name="title"
                                defaultValue={selectedItem?.title}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                name="description"
                                multiline
                                rows={4}
                                defaultValue={selectedItem?.description}
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Link"
                                name="link"
                                defaultValue={selectedItem?.link}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Button Text"
                                name="buttonText"
                                defaultValue={selectedItem?.buttonText}
                                required
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button 
                        type="submit"
                        variant="contained"
                        sx={{ 
                            bgcolor: Color.purple.main,
                            '&:hover': { bgcolor: Color.purple.main }
                        }}
                    >
                        {selectedItem ? 'Update' : 'Create'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default EditNewsDialog; 