// components/Sidebar.tsx
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import GroupIcon from '@mui/icons-material/Group';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InboxIcon from '@mui/icons-material/Inbox';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: '#1E2753',
        marginTop: -1,
        marginLeft: -1,
        minHeight: '100vh',
      }}
    >
      <List>
        <ListItem onClick={() => router.push('/')}>
          <ListItemIcon>
            <InventoryIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: 'white' }} primary="Sản phẩm" />
        </ListItem>
        <ListItem>
          <ListItemIcon onClick={() => router.push('/brand')}>
            <DashboardIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: 'white' }} primary="Thương hiệu" />
        </ListItem>
        <ListItem onClick={() => router.push('/category')}>
          <ListItemIcon>
            <CategoryIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: 'white' }} primary="Loại sản phẩm" />
        </ListItem>
        <ListItem onClick={() => router.push('/customer')}>
          <ListItemIcon>
            <GroupIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: 'white' }} primary="Khách hàng" />
        </ListItem>
        <ListItem onClick={() => router.push('/order')}>
          <ListItemIcon>
            <ReceiptIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: 'white' }} primary="Đơn hàng" />
        </ListItem>
        <Divider sx={{ backgroundColor: 'white' }} />
        <ListItem
          onClick={() => {
            localStorage.removeItem('token');
            router.push('/login');
          }}
        >
          <ListItemIcon>
            <InboxIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText sx={{ color: 'white' }} primary="Đăng xuất" />
        </ListItem>
      </List>
    </Box>
  );
};
export default Sidebar;
