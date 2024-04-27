import React from 'react';
import './App.css';
import { useState } from 'react';

import DrawerAppBar from './components/DrawerAppBar';
import Form from './Pages/Form';
import Listings from './Pages/Listings'

function App() {

  const [option, setOption] = useState('');
  
  return (
    <React.Fragment>
      <DrawerAppBar
      option={option}
      setOption={setOption}
      />
      {
        option === 'SELL/RENT' 
        ?
        <div className='center form'>
         <Form/>
       </div>
       :
       <div className=''>

         <Listings/>
       </div>
      }
      
    </React.Fragment>
  );
}

export default App;
