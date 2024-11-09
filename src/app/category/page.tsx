'use client';
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
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getCateListHanlder } from '../store/reducers';

const categoriesData = [
  {
    id: 1,
    name: 'Hoodies',
    description: 'Comfortable and stylish hoodies for all seasons.',
    productCount: '96 products',
  },
  {
    id: 2,
    name: 'T-Shirts',
    description: 'Casual and fashionable t-shirts for every occasion.',
    productCount: '56 products',
  },
  // Add more categories here...
];

const ManageCategories = () => {
  const [categories, setCategories] = useState(categoriesData);
  const dispatch = useDispatch();
  const { cateList } = useSelector((state: RootState) => state.cateList); // Assuming you have a category state
  const router = useRouter();

  useEffect(() => {
    dispatch(getCateListHanlder()); // Dispatch to fetch categories
  }, [dispatch, cateList.length]);

  const handleEdit = (id: number) => {
    console.log('Edit category with id:', id);
    // Add your edit logic here
  };

  const handleDelete = (id: number) => {
    console.log('Delete category with id:', id);
    // Add your delete logic here
  };

  return (
    <Box>
      <Typography textAlign={'center'} variant="h4" mb={2} marginBottom={4}>
        Danh mục sản phẩm
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box />
        <Button variant="contained" color="primary">
          Thêm danh mục mới
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tên danh mục</TableCell>
            <TableCell>Mô tả</TableCell>
            <TableCell>Sản phẩm</TableCell>
            <TableCell align="center">Sửa / Xoá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>{category.productCount}</TableCell>
              <TableCell align="center">
                <IconButton
                  color="primary"
                  onClick={() => handleEdit(category.id)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDelete(category.id)}
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

export default ManageCategories;
