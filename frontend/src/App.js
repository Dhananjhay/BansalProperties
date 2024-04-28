import React from 'react';
import './App.css';
import { useState } from 'react';

import DrawerAppBar from './components/DrawerAppBar';
import Form from './Pages/Form';
import Listings from './Pages/Listings'
import Introduction from './Pages/Introduction';

function App() {

  const [option, setOption] = useState('');
  
  return (
    <React.Fragment>
      <DrawerAppBar
      setOption={setOption}
      />
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
