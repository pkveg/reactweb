// import {useState} from 'react'
// import favorStyle from './w10-01-01_useState/FavorColor.module.css'

// const FavorColor=()=>{

//   const [color, setColor] = useState('red')
//   return(

//     <>
//       <h1>내가 좋아하는 색은 <span className={color}>{color}</span></h1>
//       <div className={favorStyle.buttonStyle}>
//         <button className='blue' type="button" onClick={()=>setColor('blue')}>blue</button>
//         <button className={favorStyle.red} type="button" onClick={()=>setColor('red')}>red</button>
//         <button className='green' type='button' onClick={()=>setColor('green')}>green</button>
//         <button className={favorStyle.yellow} type='button' onClick={()=>setColor('yellow')}>yellow</button>
//       </div>
//     </>
//   )
// }

/*
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import FavorColor from './w10-01-01_useState/FavorColor'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <FavorColor/>
  </React.StrictMode>
)

reportWebVitals()
*/


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import FavorColor from './w10-01-01_useState/FavorColor'
// import Carinfo2 from'./w10-01-02_useEffect/CarInfo2'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <>
//     <Carinfo2/>
//   </>
// )

import React from 'react'
import ReactDOM from 'react-dom/client'

import '.'
import Login from './w10-01-02_useEffect/login'

const root = 
ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <>
      <Login/>
    </>
  </React.StrictMode>
)