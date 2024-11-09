'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrandsHanlder } from '../products/store/reducers/get-brands';
import { RootState } from '../store/store';

const brandsData = [
  {
    id: 1,
    name: 'Nike',
    productCount: '120 products',
    description: 'Famous brand for sportswear and shoes.',
  },
  {
    id: 2,
    name: 'Adidas',
    productCount: '85 products',
    description: 'Known for their high-quality athletic gear.',
  },
  // Add more brands here...
];

const BrandPage = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state: RootState) => state.brands); // Assuming you have a brand state
  const router = useRouter();

  useEffect(() => {
    dispatch(getBrandsHanlder()); // Dispatch to fetch brands
  }, [dispatch, brands.length]);

  const handleEdit = (id: number) => {
    console.log('Edit brand with id:', id);
    // Add your edit logic here
  };

  const handleDelete = (id: number) => {
    console.log('Delete brand with id:', id);
    // Add your delete logic here
  };

  return (
    <Box>
      <Typography textAlign={'center'} variant="h4" mb={2} marginBottom={4}>
        Danh sách thương hiệu
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box />
        <Button variant="contained" color="primary">
          Thêm thương hiệu mới
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tên thương hiệu</TableCell>
            <TableCell>Sản phẩm</TableCell>
            <TableCell>Mô tả</TableCell>
            <TableCell align="center">Sửa / Xoá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {brands.map((brand) => (
            <TableRow key={brand.id}>
              <TableCell>{brand.name}</TableCell>
              <TableCell>{brand.productCount}</TableCell>
              <TableCell>{brand.image}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  onClick={() => handleEdit(brand.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(brand.id)}
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

export default BrandPage;
