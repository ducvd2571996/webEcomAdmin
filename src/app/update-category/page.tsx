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
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UpdateCategoryDto } from '../model';
import { updateCateHanlder } from '../store/reducers';

const UpdateCategory = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // Lấy tham số từ URcL
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  console.log('111---,', category);

  const querycategory = category ? JSON.parse(category) : {};

  const [categoryData, setCategoryData] = useState({
    name: querycategory?.name,
    description: querycategory?.image,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: UpdateCategoryDto = {
      id: querycategory?.id,
      name: categoryData.name,
      image: categoryData.description,
    };
    dispatch(
      updateCateHanlder({
        category: payload,
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
          Thêm mới danh mục sản phẩm
        </Typography>
        <Box width={10}></Box>
      </Box>

      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <TextField
          fullWidth
          label="Tên sản danh mục"
          name="name"
          value={categoryData.name}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Mô tả"
          name="description"
          value={categoryData.description}
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
          Cập nhật danh mục
        </Button>
      </form>
      <Snackbar
        open={isOpen}
        autoHideDuration={2000}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setIsOpen(false)} severity="success">
          {'Cập nhật thành công'}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default UpdateCategory;
