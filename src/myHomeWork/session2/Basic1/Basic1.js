import React from 'react'
import img from '../images/1.jpg'
import './Basic1.css'

const shirt = {
    image: img,
    name: 'Clothing & Applarel',
    info1:'Accessories',
    info2:'Bags',
    info3:"Kid's Fasion",
    info4:"Men",

}

function render(shirt) {
    return (
        <>
            <div className='card'>
                <div className='card_description'>
                    <div className='img_des'>
                        <img src={shirt.image} className="img" ></img>
                    </div>
                    <div className='info'>
                        <span className='info_title'>{shirt.name}</span>
                        <span>{shirt.info1}</span>
                        <span>{shirt.info2}</span>
                        <span>{shirt.info3}</span>
                        <span>{shirt.info4}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default function Basic1() {
  return (
    <>
        <div>
            {render(shirt)}
        </div>
    </>
  )
}
