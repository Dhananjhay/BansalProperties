import React, {useState} from 'react'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {listingData} from '../Data/listingData.js'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import PopUpDialog from '../Components/PopUpDialog.js';



import '../App.css'

const Listings = () => {
  const [open, setOpen] = useState(false);
  const [selectedId,setSelectedId] = useState(0);

  const [propType, setPropType] = useState(false);
  const [lease, setLease] = useState(true);


  const handleClickOpen = (id) => {
    setOpen(true);
    setSelectedId(id);
  };

  return (
    <React.Fragment>
      <PopUpDialog 
        open={open} 
        setOpen={setOpen}
        property={listingData.filter((prop)=> prop.id === selectedId)}
      />
    <div 
    style={{
      display: 'flex', 
      justifyContent:'center',
      marginTop: '5rem'
      }}>
    <FormGroup>
      <FormControlLabel
      control={
        <Switch
        checked={propType}
        onChange={(e) => setPropType(e.target.checked)}
        aria-label="Property type switch"
        />
      }
      label={propType ? 'Commercial' : 'Residential'}
      />
    </FormGroup>
    <FormGroup>
      <FormControlLabel
      control={
        <Switch
        checked={lease}
        onChange={(e) => setLease(e.target.checked)}
        aria-label="Lease type switch"
        />
      }
      label={lease ? 'Sale' : 'Rent'}
      />
    </FormGroup>
    </div>
    <div className='propertyList'>
      {
        listingData.filter((property) => property.leaseType === (lease ? 'Sale' : 'Rent')).filter((property) => property.type === (propType ? 'Commercial' : 'Residential' )).map((item)=>{
          const {id, price, address, numBeds, numBaths, numBal, area, furnished, facing, lift, negotiable, img, available, collection} = item;
          return(
          <div className='property' key={id}>
            <div style={{
              width: '100%',
            }}>
          <img src={img} alt='Property image' 
          style={{
            borderRadius: '1rem',
          }}
          />
            </div>
          <p style={{
            textAlign:'center', 
            backgroundColor: '#f1f5f8', 
            borderRadius: '1rem', 
            padding: '0.5rem', 
            fontSize: '24px',
            marginTop: '0.5rem'
            }}
            >
            {price} /-
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '1rem 0rem'
          }}>
            {
              propType 
              ?
              <>
            <div className='feature'>
            <span>
              {furnished ? <>Furnished</> : <>Unfurnished</>}
              </span>
            </div>
              </>
              :
              <>
            <div className='feature'>
            <span>
              {numBeds}
              </span>
            <BedIcon fontSize='large'/>
            </div>
            <div className='feature'>
            <span>
              {numBaths}
              </span>
            <BathtubIcon fontSize='large'/>
            </div>
              </>
            }
            <p className='feature'>
                {area} sqft
              </p>
          </div>
            <p className='feature'>
            {address}
            </p>
            <Button variant='contained' sx={{
              marginTop: '1rem',
              fontSize: '20px',
              borderRadius: '1rem',
              backgroundColor: available ? 'green' : 'red'
            }}>{available ? 'Available' : lease ? 'Sold' : 'Rented'}
            </Button>
            <div className='listButtons'>
              <Button variant='contained' 
              sx={{
                marginTop: '1rem',
                fontSize: '20px'
              }}
              onClick={()=> handleClickOpen(id)}
              >VIEW
              </Button>
              <Button variant='contained' 
              sx={{
                marginTop: '1rem',
                fontSize: '20px'
              }}
              >        
              <Link
                href={"https://wa.me/919711887400?text=" + "Hello! I'm interested in " + (lease ? 'purchas' : 'rent') + "ing " + address + "."} 
                color="inherit" 
                underline='none'
                >
                CONTACT
                </Link>
              </Button>
              </div>
          </div>
          )
        })
      }
    </div>
      </React.Fragment>
  )
}

export default Listings
