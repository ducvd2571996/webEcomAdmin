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
import { Category, UpdateCategoryDto } from '../model';
import { deleteCateHanlder, getCateListHanlder } from '../store/reducers';
import { RootState } from '../store/store';

const ManageCategories = () => {
  const dispatch = useDispatch();
  const { cateList } = useSelector((state: RootState) => state.cateList); // Assuming you have a category state
  const router = useRouter();

  useEffect(() => {
    dispatch(getCateListHanlder()); // Dispatch to fetch categories
  }, [dispatch, cateList.length]);

  const handleEdit = (category: UpdateCategoryDto) => {
    const query = new URLSearchParams({
      category: JSON.stringify({
        ...category,
      }),
    }).toString();
    console.log('aaaaa11', category);

    router.push(`/update-category?${query}`);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteCateHanlder({ categoryId: id }));
  };

  return (
    <Box>
      <Typography textAlign={'center'} variant="h4" mb={2} marginBottom={4}>
        Danh mục sản phẩm
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box />
        <Button
          onClick={() => router.push('add-category')}
          variant="contained"
          color="primary"
        >
          Thêm danh mục
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
                  onClick={() =>
                    handleEdit({
                      id: category?.id,
                      name: category?.name,
                      image: category?.image,
                    })
                  }
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
