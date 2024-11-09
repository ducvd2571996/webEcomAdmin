// pages/add-product.tsx
'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Alert,
  Box,
  Button,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddBrandDto } from '../model/brand.model';
import { addBrandHanlder } from '../store/reducers';

const AddBrand = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const [brandData, setBrandData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBrandData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: AddBrandDto = {
      name: brandData.name,
      image: brandData.description,
    };
    dispatch(
      addBrandHanlder({
        brand: payload,
        callback: () => {
          setIsOpen(true);
        },
      })
    );
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 3, mx: 'auto', bgcolor: '#fff' }}
    >
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <IconButton onClick={() => router.back()}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" ml={2}>
          Thêm mới thương hiệu sản phẩm
        </Typography>
        <Box width={10}></Box>
      </Box>

      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <TextField
          fullWidth
          label="Tên sản danh mục"
          name="name"
          value={brandData.name}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Mô tả"
          name="description"
          value={brandData.description}
          onChange={handleInputChange}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Thêm thương hiệu sản phẩm
        </Button>
      </form>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setIsOpen(false)} severity="success">
          {'Thêm thành công'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddBrand;
