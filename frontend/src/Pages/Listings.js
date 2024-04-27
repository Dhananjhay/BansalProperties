import React, {useState} from 'react'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {listingData} from '../listingData.js'
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';

import '../App.css'

const Listings = () => {

  const [propType, setPropType] = useState(false);
  const [lease, setLease] = useState(true);

  return (
    <React.Fragment>

    <div 
    style={{
      marginTop: '5%', 
      display: 'flex', 
      justifyContent:'center'
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
          const {id, price, address, numBeds, numBaths, numBal, area, furnished, facing, lift, negotiable, img} = item;
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
            fontSize: '24px'}}>
            {price} /-
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '1rem'
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
            <div className='feature'>
            <span>
              {negotiable ? <>Negotiable</> : <>Unnegotiable</>}
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
          </div>
          )
        })
      }
    </div>
      </React.Fragment>
  )
}

export default Listings
