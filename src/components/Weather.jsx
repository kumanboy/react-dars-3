import React from 'react'

const Weather = ({temperature}) => {
    if (temperature < 15){
        return <div>havo sovuq</div>
    }
    else if (temperature > 15 && temperature < 25){
        return <div>havo ajoyib</div>
    }else{
        return <div>havo issiq</div>
    }
}
export default Weather
