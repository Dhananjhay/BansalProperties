import React, { useState } from 'react'

import profile from '../Images/singham.jpg'
import { Button } from '@mui/material'
import Menu from '@mui/material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CallIcon from '@mui/icons-material/Call';

import '../App.css'


const Introduction = ({setOption}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='introduction'>
        <div>
        <img 
        src={profile} 
        alt='Profile Photo' 
        style={{
            width: '100%',
            borderRadius: '1rem'
        }}
        />
      </div>
      <div style={{
        fontSize: '35px',
        textAlign: 'center',
        marginTop: '10px'
      }}>
        <p>
            TOP RATED REALTOR
        </p>
        <p style={{
            marginBottom: '1rem'
        }}>
            in East Delhi & Noida
        </p>
        <p style={{
            fontSize: '24px',
            marginBottom: '2rem'
        }}>
            Hi! I'm Sanjeev Bansal and I've been a realtor for more than 20 years. Over the years, I've carefully designed strategies and techniques to help clients achieve their real estate goals.
        </p>
        <p style={{
            fontSize: '24px',
            marginBottom: '2rem'
        }}>
           To do business or to get in touch with me, please choose an option from below.
        </p>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
        }}>

        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='contained'
      >
        CONTACT
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <CallIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>9711887400</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <EmailIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>sanjeev.bansal71@yahoo.com</ListItemText>
        </MenuItem>
      </Menu>

      <Button variant='contained' onClick={()=>setOption('FEATURED LISTINGS')}>
        LISTINGS
      </Button>

      <Button variant='contained' onClick={()=>setOption('SELL/RENT')}>
        SELL/RENT
      </Button>
    </div>
      </div>
    </div>
  )
}

export default Introduction
