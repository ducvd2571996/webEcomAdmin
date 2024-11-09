// pages/add-product.tsx
'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProductDto } from '../model';
import { getBrandsHanlder } from '../products/store/reducers/get-brands';
import { getCateListHanlder, updateProductHanlder } from '../store/reducers';
import { RootState } from '../store/store';

const UpdateProduct = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.cateList.cateList);
  const brands = useSelector((state: RootState) => state.brands.brands);
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  // Lấy tham số từ URL
  const product = searchParams.get('product');
  console.log('111---,', product);

  const queryProduct = product ? JSON.parse(product) : {};
  const parsedProduct = queryProduct?.product;
  const [productData, setProductData] = useState({
    name: parsedProduct?.name || '',
    categoryId: parsedProduct?.categoryId || 0,
    brand: parsedProduct?.brand || 0,
    image: parsedProduct?.image || '',
    description: parsedProduct?.description || '',
    price: parsedProduct?.price || 0,
    discount: parsedProduct?.discount || 0,
  });

  useEffect(() => {
    dispatch(getCateListHanlder());
  }, [brands?.length]);

  useEffect(() => {
    dispatch(getBrandsHanlder());
  }, [categories?.length]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'categoryId' || name === 'brand') {
      const selectedValue = parseInt(value, 10); // Convert to number
      setProductData((prevData) => ({
        ...prevData,
        [name]: selectedValue, // Update with the number ID
      }));
    } else {
      // Otherwise, for fields like price, name, description, etc.
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    const selectedCategory = categories.find(
      (category) => category.name === e.target.value
    );
    if (selectedCategory) {
      setProductData((prevData) => ({
        ...prevData,
        categoryId: selectedCategory.id, // Store the categoryId
      }));
    }
  };

  const handleBrandChange = (e: SelectChangeEvent<string>) => {
    const selectedBrand = brands.find((brand) => brand.name === e.target.value);
    if (selectedBrand) {
      setProductData((prevData) => ({
        ...prevData,
        brand: selectedBrand.id, // Store the brandId
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: UpdateProductDto = {
      id: parsedProduct?.productId,
      name: productData?.name,
      brand: productData.brand,
      description: productData.description,
      image: productData.image,
      discount: parseInt(productData?.discount?.toString()),
      price: parseInt(productData?.price?.toString()),
      tax: 0,
      categoryId: productData?.categoryId,
    };
    dispatch(
      updateProductHanlder({
        product: payload,
        callback: () => {
          setIsOpen(true);
        },
      })
    );
  };

  const selectedBrand = brands?.find((x) => x?.id === productData?.brand);

  const selectedCate = categories?.find(
    (x) => x?.id === productData?.categoryId
  );

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
          Thêm mới sản phẩm
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
          <InputLabel>Danh mục</InputLabel>
          <Select
            label="Loại sản phẩm"
            name="category"
            value={selectedCate?.name}
            onChange={handleCategoryChange}
            required
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.name}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Thương hiệu</InputLabel>
          <Select
            label="Thương hiệu"
            name="brand"
            value={selectedBrand?.name}
            onChange={handleBrandChange}
            required
          >
            {brands.map((brand) => (
              <MenuItem key={brand.id} value={brand.name}>
                {brand.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          label="Giá"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Khuyến mãi"
          name="discount"
          value={productData.discount}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Link hình"
          name="image"
          value={productData.image}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Mô tả"
          name="description"
          value={productData.description}
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
          Cập nhật sản phẩm
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

export default UpdateProduct;
