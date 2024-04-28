import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Container from '@mui/material/Container';

const DrawerAppBar = ({setOption}) => {

  return (
        <AppBar component="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
           justifyContent: 'center'
        }}>
          <ApartmentIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={()=>setOption('')}
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            BANSAL
          </Typography>
          </Toolbar>
          </Container>
        </AppBar>
  )
}

export default DrawerAppBar

