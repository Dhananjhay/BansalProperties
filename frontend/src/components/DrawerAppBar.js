import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Container from '@mui/material/Container';

const DrawerAppBar = ({setOption}) => {

  return (
        <AppBar sx={{
          backgroundColor: 'black'
        }}>
        <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
           justifyContent: 'center'
        }}>
          <ApartmentIcon 
          className='material-icons'
          style={{
          fontSize: '50px'
          }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={()=>setOption('')}
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            style={{
              fontSize: '16px'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              margin:'0.5rem'
            }}>
            <p>BANSAL</p>
            <p>PROPERTIES</p>
            </div>
          </Typography>
          </Toolbar>
          </Container>
        </AppBar>
  )
}

export default DrawerAppBar

