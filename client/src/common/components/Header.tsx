import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CartMenu from './CartMenu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CartMenu/>
      <AppBar position="static" sx={{ width: '100vw', height: '80px', display: 'flex', justifyContent: 'center' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ cursor: 'pointer' }}
            onClick={() => window.location.href = '/'}
          >
            MilSOFT E-Commerce
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}