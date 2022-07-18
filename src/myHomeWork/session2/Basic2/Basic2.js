import React from 'react'
import img from '../images/2.jpg'
import './Basic2.css'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'

const tiviPd = {
    image: img,
    shop: "YOUNG SHOP",
    name: "Samsung UHD TV 24inch",
    star: 4,
    money: 599,
} 

const renderStar = (star) => {
    let content = []

    for(let i = 0; i < star; i++) {
        content.push(<i className="bi bi-fill-star"> <AiFillStar/></i>)
    }

    for(let i = star; i < 5; i++) {
        content.push(<i className="bi bi-star"><AiOutlineStar/></i>)
    }

    content.push(<span>&nbsp; {star}</span>);

    return content
}

function render(tivi) {
    return (
        <>
            <div className="card1">
                <div className="card1-descriptions">
                    <div className="img1-des">
                        <img src={tivi.image} className="imageBS2" alt="error"></img>
                    </div>
                    <div className="prof1-des">
                        <p className="shop-name">{tivi.shop}</p>
                        <hr/>
                        <span className="name-tivi">{tivi.name}</span>
                        <div className="star-line">{renderStar(tivi.star)}</div>
                        <span>{tivi.money}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function BoxProduct2() {
  return (
    <div>{render(tiviPd)}</div>
  )
}
