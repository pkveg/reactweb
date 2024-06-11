import { useState } from "react";
// import favorStyle from './w10-01-01_useState/FavorColor.module.css'

const Carinfo2 = () =>{
    const [car, setCar] = useState({
        brand: "현대차",
        model: '카니발',
        year: '2023',
        color: 'red'
    })

    return(
        <>
            <h1>내차 정보: {car.brand}</h1>
            <p>차량모델 : {car.model} 색상: {car.color} 제조년:{car.year}</p>
        </>
    )
}

export default Carinfo2