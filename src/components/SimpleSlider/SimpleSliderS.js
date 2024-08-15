'use client';

import SliderOne from "../SliderOne/SliderOne";
import NewsArray from "../../../public/TestNewsPics";

function SimpleSliderS(){

    return(
    <div className="slider-container">
        {NewsArray.map((item, index) => (
            <SliderOne key={index} object={item}/>
        ))}
    </div>
    )

}

export default SimpleSliderS;