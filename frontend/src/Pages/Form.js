import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

import '../App.css'

const Form = () => {

    const [formData, setFormData] = useState({
        bedroom: 0,
        bathroom: 0,
        area: 0,
        address: '',
        price: '',
    });

    const [leaseType, setLeaseType] = useState('sell');
    const [propType, setPropType] = useState('residential');
    const [furnishStatus, setFurnishStatus] = useState('furnished');

    let message = "https://wa.me/919711887400?text=" + "Hello! I'm interested in " + leaseType + "ing " + formData.address + " for " + formData.price + ". Additional details: Area: " + formData.area + " sq. feet" + ", bedroom: " + formData.bedroom + ", bathroom: " + formData.bathroom + ", " + furnishStatus;

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]:value})
    }; 

  return (
    <React.Fragment>
    <Box 
    sx={{
        margin: '7px',
        textAlign: 'center'
    }}
    >
 <FormControl>
        <FormLabel id="sell-or-rent"></FormLabel>
        <RadioGroup
        row
        aria-labelledby='row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        onChange={(e)=> setLeaseType(e.target.value)}
        value={leaseType}
        >
            <FormControlLabel value="sell" control={<Radio/>} label="Sell" name='sell'/>
            <FormControlLabel value="rent" control={<Radio/>} label="Rent" name='rent'/>
        </RadioGroup>
    </FormControl>
    </Box>
    <Box
      component="form"
      margin={1}
      className='Box'
    >
        <Box
        sx={{
            margin: '2px',
            gap: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}
        >
    <TextField
        id="outlined-bedroom"
        name='bedroom'
        label="Number of Bedrooms"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        fullWidth
        onChange={handleChange}
        disabled={propType === 'commercial'}
        />
    <TextField
        id="outlined-bathroom"
        name='bathroom'
        label="Number of Bathrooms"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        fullWidth
        onChange={handleChange}
        disabled={propType === 'commercial'}
        />
        <TextField
        id="outlined-area"
        name='area'
        label="Area (Sq. Feet)"
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        fullWidth
        onChange={handleChange}
        />
        </Box>
        <Box
        sx={{
            margin: '2px',
            gap: '0.8rem',
            display: 'flex',
            flexDirection:'column'
        }}
        >
    <TextField 
      id="outlined-address" 
      name='address'
      label="Address" 
      variant="outlined" 
      fullWidth
      onChange={handleChange}
      />
    <TextField 
        id="outlined-price" 
        name='price'
        label="Price" 
        variant="outlined"
        fullWidth 
        onChange={handleChange}
    />
        </Box>
    </Box>
            <Box
        sx={{
            margin: '7px',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}
        >
    <FormControl>
        <FormLabel id="residential-commercial">Property Type</FormLabel>
        <RadioGroup
        row
        aria-labelledby='row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        value={propType}
        onChange={(e)=> setPropType(e.target.value)}
        >
            <FormControlLabel value="residential" control={<Radio/>} label="Residential"/>
            <FormControlLabel value="commercial" control={<Radio/>} label="Commercial"/>
        </RadioGroup>
    </FormControl>
        <FormControl>
        <FormLabel id="furnished-or-not">Furnishing Status</FormLabel>
        <RadioGroup
        row
        aria-labelledby='row-radio-buttons-group-label'
        name='row-radio-buttons-group'
        value={furnishStatus}
        onChange={(e) => setFurnishStatus(e.target.value)}
        >
            <FormControlLabel value="furnished" control={<Radio/>} label="Furnished"/>
            <FormControlLabel value="unfurnished" control={<Radio/>} label="Unfurnished"/>
        </RadioGroup>
    </FormControl>
    </Box>
    <Box 
    sx={{
        textAlign:'center',
    }}
    >
    <Button variant='contained' 
    sx={{
        marginTop: '20px',
        marginBottom: '20px'
    }}
    disabled={(formData.address && formData.price) ? false : true}
    >
        <Link
        href={message} 
        color="inherit" 
        underline='none'
        >
        Submit
        </Link>
        </Button>
    </Box>
    </React.Fragment>
  )
}

export default Form
