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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../model';
import { getCateListHanlder } from '../store/reducers';
import { RootState } from '../store/store';

const ManageCategories = () => {
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
            <TableCell>Số lượng sản phẩm</TableCell>
            <TableCell>Mô tả</TableCell>
            <TableCell align="center">Sửa / Xoá</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cateList?.map?.((category: Category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.productCount}</TableCell>
              <TableCell>{category.image}</TableCell>
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
