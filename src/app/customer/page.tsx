// pages/customers.tsx
'use client';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerData, UpdateCustomerDto } from '../model/user.model';
import { fetchListUserRequest } from '../store/reducers';
import { RootState } from '../store/store';

const CustomerList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const customerList = useSelector((state: RootState) => state.user.customers);
  useEffect(() => {
    dispatch(fetchListUserRequest());
  }, []);

  const handleEdit = (customer: UpdateCustomerDto) => {
    const query = new URLSearchParams({
      customer: JSON.stringify({
        ...customer,
      }),
    }).toString();

    router.push(`/update-customer?${query}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography textAlign={'center'} variant="h4" mb={2} marginBottom={4}>
        Danh sách khách hàng
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerList.map((customer: CustomerData) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>
                {moment(customer.createdAt).format('DD-MM-YYYY')}
              </TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() =>
                    handleEdit({
                      id: customer?.id,
                      name: customer?.name,
                      address: customer?.address,
                      email: customer?.email,
                      phoneNumber: customer?.phoneNumber,
                    })
                  }
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default CustomerList;
