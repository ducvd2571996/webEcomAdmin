'use client';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListHanlder } from '../products/store/reducers/get-product';
import { RootState } from '../store/store';
import { Bar } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analyze = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(getProductListHanlder({}));
  }, [dispatch]);

  const bestSellingProducts = productList?.slice?.(0, 5);
  console.log('product---', productList);

  const chartData = {
    labels: bestSellingProducts?.map?.((product) => product.name),
    datasets: [
      {
        label: 'Số lượng bán ra',
        data: bestSellingProducts?.map?.((product) => product.salecount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '5 sản phẩm bán chạy nhất' },
    },
  };

  return (
    <Box>
      <Typography textAlign={'center'} variant="h4" mb={2} marginBottom={4}>
        Thống kê
      </Typography>
      <Bar data={chartData} options={chartOptions} />
    </Box>
  );
};

export default Analyze;
