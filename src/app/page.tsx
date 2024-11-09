'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  CardMedia,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import { RootState } from './store/store';
import { getProductListHanlder } from './products/store/reducers/get-product';
import { formatPrice } from '@/helper/formatString/format-price';
import { Product } from './model';
import { deleteProductHanlder } from './store/reducers';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const { productList } = useSelector((state: RootState) => state.productList);
  const [searchValue, setSearch] = useState('');
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('./login');
    }
    console.log(token);
  });
  useEffect(() => {
    dispatch(getProductListHanlder({}));
  }, [dispatch]);

  useEffect(() => {
    setProducts(productList); // Set products to the latest productList on update
  }, [productList]);
  console.log(productList);

  const handleEdit = (product: Product) => {
    const query = new URLSearchParams({
      product: JSON.stringify({
        product,
      }),
    }).toString();
    console.log('aaaaa11', product);

    router.push(`/update-product?${query}`);
  };

  const handleSearch = (searchTxt: string) => {
    const filtered = productList?.filter(
      (product) =>
        product?.name?.toLowerCase?.()?.includes(searchTxt.toLowerCase()) // Adjust `product.name` as needed
    );
    setProducts(filtered);
    setSearch(searchTxt);
  };

  const handleDelete = (productId: number) => {
    dispatch(deleteProductHanlder({ productId }));
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2} height={40}>
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm..."
          onChange={(e) => handleSearch(e.target.value)}
          value={searchValue}
          size="small" // Makes the input smaller
          sx={{ width: 300 }} // Adjust width as needed
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          onClick={() => router.push('/add-product')}
          variant="contained"
          color="primary"
        >
          Thêm sản phẩm mới
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{''}</TableCell>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell>{'Giá (VND)'}</TableCell>
            <TableCell>Khuyến mãi</TableCell>
            <TableCell>Màu sắc</TableCell>
            <TableCell>Đánh giá</TableCell>
            <TableCell align="center">Sửa / Xoá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product?.productId}>
              <TableCell>
                <CardMedia
                  component="img"
                  sx={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'contain',
                    marginRight: 2,
                  }}
                  image={product?.image}
                  alt={product?.name}
                />
              </TableCell>
              <TableCell>{product?.name}</TableCell>
              <TableCell>{formatPrice(product?.price)}</TableCell>
              <TableCell>{product?.discount}</TableCell>
              <TableCell>{product?.discount ? 'Blue' : 'White'}</TableCell>
              <TableCell>{product?.tax}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => handleEdit(product)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(product?.productId)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Home;
