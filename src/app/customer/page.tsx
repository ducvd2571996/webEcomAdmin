// pages/customers.tsx
'use client';
import { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
}

const customersData: Customer[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield',
    createdAt: '2024-11-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '987-654-3210',
    address: '456 Elm St, Metropolis',
    createdAt: '2024-11-02',
  },
  // Add more sample customers here...
];

const CustomerList = () => {
  const [customers, setCustomers] = useState(customersData);

  const handleEdit = (customerId: number) => {
    // Add edit functionality here, like navigating to an edit form
    console.log('Edit customer with ID:', customerId);
  };

  const handleDelete = (customerId: number) => {
    // Handle delete functionality here
    setCustomers((prevCustomers) =>
      prevCustomers.filter((customer) => customer.id !== customerId)
    );
    console.log('Deleted customer with ID:', customerId);
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
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.address}</TableCell>
              <TableCell>{customer.createdAt}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => handleEdit(customer.id)}
                  color="primary"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(customer.id)}
                  color="error"
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

export default CustomerList;
