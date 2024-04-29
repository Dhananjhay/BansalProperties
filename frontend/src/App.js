import React from 'react';
import './App.css';
import { useState } from 'react';

import DrawerAppBar from './Components/DrawerAppBar';
import Form from './Pages/Form';
import Listings from './Pages/Listings'
import Introduction from './Pages/Introduction';
import { Button } from '@mui/material';

function App() {

  const [option, setOption] = useState('');
  
  return (
    <React.Fragment>
      <DrawerAppBar
      setOption={setOption}
      />
      {
        option !== ''
        ?
        <div style={{
          marginTop: '5rem',
          textAlign:'center',
        }}>
         <Button 
         variant='contained' 
         onClick={()=> setOption('')}
         sx={{
          backgroundColor:'black'
         }}
         >
          HOMEPAGE
        </Button>
        </div>
        :
        null
      }
      {
        option === 'SELL/RENT' 
        ?
        <div className='center form'>
         <Form/>
       </div>
       :
       option === 'FEATURED LISTINGS'
       ?
         <Listings/>
       :
       <Introduction setOption={setOption}/>
      }
      
    </React.Fragment>
  );
}

export default App;
