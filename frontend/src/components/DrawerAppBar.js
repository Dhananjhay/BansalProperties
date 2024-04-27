import React from 'react'
import { useState } from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = ['FEATURED LISTINGS', 'SELL/RENT'];

const DrawerAppBar = (props) => {

    const {option, setOption} = props;

  return (
        <Box>
        <AppBar component="nav" sx={{backgroundColor: 'white'}}>
            <Toolbar>
            <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'black' }}
            >
            BANSAL PROPERTIES
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              option === item ?
              <Button key={item} sx={{ color: 'black', margin: '2px'}} variant='contained'>
                {item}
              </Button>
              :
              <Button key={item} sx={{ color: 'black', margin: '2px'}} onClick={() => setOption(item)}>
              {item}
              </Button>
              ))}
          </Box>
            </Toolbar>
        </AppBar>
        </Box>
  )
}

export default DrawerAppBar
