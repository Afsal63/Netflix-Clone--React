
import React from 'react';
 import  './componets/Navbar/NavBar.css'
import NavBar from './componets/Navbar/NavBar';
import {action,orginals} from './url'
import './App.css'
import Banner from './componets/Banner/Banner';
import Rowpost from './componets/poster/Rowpost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Rowpost url={orginals} title='Netflix Originals'/>
      <Rowpost url={action}title='Action'isSmall />
      <Rowpost url={action}title='Action'isSmall />
    </div>
  );
}

export default App;
