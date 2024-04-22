import React from 'react';

import './App.css';
import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    <React.Fragment>
    <div className='header'>
    Bansal Properties  

    Login <PersonIcon/>
    </div>
    <div>
      About
      <img src="./images/pp.png" alt='pp' width='25%' height='25%'/>

    </div>
    <div className='footer'>
      <section>
        Residential
      </section>
      <section>
        Commercial
      </section>
    </div>
    </React.Fragment>
  );
}

export default App;
