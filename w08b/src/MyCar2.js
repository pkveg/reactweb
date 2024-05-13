import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

function Car(props){
    return <li>I am a {props.brand}</li>
}

// function Garage(){
//     const cars = ['Ford', 'BMW', 'AUDI']
//     return(
//     <>
//         <h1>who lives in my Garage?</h1>
//         <ul>
//           {cars.map((car)=> <Car brand={car}/>)}  
//     </ul>
//     </>
//     )
// }

function Garage(){
    const cars = [
        {id: 1, brand : 'Ford'},
        {id : 2, brand : 'BMW'},
        {id : 3, brand : 'Audi'}
    ]
    return(
        <>
        <h1>Who lives in my garage?</h1>
        <ul>
            {cars.map((car)=> <Car key={car.id} brand={car.brand}/>)}
        </ul>
        </>
    )
}
export default Garage