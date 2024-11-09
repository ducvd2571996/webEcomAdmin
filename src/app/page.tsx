'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
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

const productsData = [
  {
    id: 1,
    name: 'Men Grey Hoodie',
    category: 'Hoodies',
    inventory: '96 in stock',
    color: 'Black',
    price: '$49.90',
    rating: '5.0 (32 Votes)',
  },
  {
    id: 2,
    name: 'Women Striped T-Shirt',
    category: 'T-Shirt',
    inventory: '56 in stock',
    color: 'White',
    price: '$34.90',
    rating: '4.8 (24 Votes)',
  },
  // Add more sample products here...
];

const Home = () => {
  const [products, setProducts] = useState(productsData);
  const dispatch = useDispatch();
  const { productList } = useSelector((state: RootState) => state.productList);
  const router = useRouter();
  useEffect(() => {
    dispatch(getProductListHanlder({}));
  }, [dispatch, productList.length]);
  console.log(productList);

  const handleEdit = (id: number) => {
    console.log('Edit product with id:', id);
    // Add your edit logic here
  };

  const handleDelete = (id: number) => {
    console.log('Delete product with id:', id);
    // Add your delete logic here
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" mb={2} height={40}>
        <TextField
          variant="outlined"
          placeholder="Tìm kiếm..."
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
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell>Giá</TableCell>
            <TableCell>Khuyến mãi</TableCell>
            <TableCell>Màu sắc</TableCell>
            <TableCell>Đánh giá</TableCell>
            <TableCell align="center">Sửa / Xoá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.inventory}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.rating}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  onClick={() => handleEdit(product.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(product.id)}
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
