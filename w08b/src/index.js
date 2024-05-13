import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import MyCar from './MyCar'
import MyCar2 from './MyCar2';
import Garage from './MyCar2';


const root = 
ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
   <Garage/>
  </React.StrictMode>
)