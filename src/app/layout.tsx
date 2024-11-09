'use client';
import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Poppins } from 'next/font/google'; // Import Poppins instead of Roboto
import theme from '../theme';
import { Provider } from 'react-redux';
import './globals.css';
import store from './store/store';
import { usePathname } from 'next/navigation';
import Sidebar from './components/slideBar';
import { Box } from '@mui/material';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Include desired weights
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins', // Update variable name if necessary
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Box sx={{ display: 'flex' }}>
                {!isLoginPage && <Sidebar />}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                  {children}
                </Box>
              </Box>
            </Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
