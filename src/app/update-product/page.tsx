// pages/add-product.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SelectChangeEvent } from '@mui/material';

const categories = ['Hoodies', 'T-Shirt', 'Shoes', 'Accessories']; // Define category options

const UpdateProductPage = () => {
  const router = useRouter();
  const [productData, setProductData] = useState({
    name: '',
    category: '',
    inventory: '',
    color: '',
    price: '',
    rating: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setProductData((prevData) => ({
      ...prevData,
      category: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Product data:', productData);
    // Add your submit logic here, like an API call to save the product
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ p: 3, mx: 'auto', bgcolor: '#fff' }}
    >
      {/* Go Back Button */}
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
          Cập nhật sản phẩm
        </Typography>
        <Box width={10}></Box>
      </Box>

      <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
        <TextField
          fullWidth
          label="Tên sản phẩm"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Thương hiệu</InputLabel>
          <Select
            label="Loại sản phẩm"
            name="category"
            value={productData.category}
            onChange={handleCategoryChange}
            required
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Thương hiệu</InputLabel>
          <Select
            label="Thương hiệu"
            name="brand"
            value={productData.category}
            onChange={handleCategoryChange}
            required
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Giá"
          name="price"
          value={productData.inventory}
          onChange={handleInputChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Khuyến mãi"
          name="discount"
          value={productData.price}
          onChange={handleInputChange}
          margin="normal"
          required
        />
        {/* <TextField
          fullWidth
          label="Màu"
          name="color"
          value={productData.color}
          onChange={handleInputChange}
          margin="normal"
          required
        /> */}

        <TextField
          fullWidth
          label="Link hình"
          name="image"
          value={productData.color}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Mô tả"
          name="description"
          value={productData.rating}
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
          Cập nhật
        </Button>
      </form>
    </Box>
  );
};

export default UpdateProductPage;
