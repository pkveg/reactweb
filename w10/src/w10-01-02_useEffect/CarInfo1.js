import { useState } from "react";
import favorStyle from './w10-01-01_useState/FavorColor.module.css'

const Carinfo1 = () =>{
    const [brand, setBrand] = useState('현대차')
    const [model, setModel] = useState('카니발')
    const [year, setYear] = useState('2023')
    const [color, setColor] = useState('red')

    return(
        <>
            <h1>내차 정보: {Car.brand}</h1>
            <p>
                차량 모델: {car.model} 색상: {car.color} 제조년: {car.year}
            </p>
        </>
    )
}

export default Carinfo1