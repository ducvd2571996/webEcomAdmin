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
import { UpdateCustomerDto } from '../model/user.model';
import { updateCateHanlder, updateUserHandler } from '../store/reducers';

const UpdateCustomer = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // Lấy tham số từ URcL
  const searchParams = useSearchParams();
  const customer = searchParams.get('customer');
  const queryCustomer = customer ? JSON.parse(customer) : {};

  const [customerData, setCategoryData] = useState({
    name: queryCustomer?.name,
    address: queryCustomer?.address,
    phoneNumber: queryCustomer?.phoneNumber,
    email: queryCustomer?.phoneNumber,
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
    const payload: UpdateCustomerDto = {
      id: queryCustomer?.id,
      ...customerData,
    };
    dispatch(
      updateUserHandler({
        customer: payload,
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
          label="Tên"
          name="name"
          value={customerData.name}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Số điện thoại"
          name="phoneNumber"
          value={customerData.phoneNumber}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={customerData.email}
          onChange={handleInputChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Địa chỉ"
          name="address"
          value={customerData.address}
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

export default UpdateCustomer;
