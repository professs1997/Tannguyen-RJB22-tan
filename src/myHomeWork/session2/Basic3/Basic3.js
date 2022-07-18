import React from 'react'
import img from '../images/3.jpg'
import './Basic3.css'

const techno = {
    image: img,
    name: "Technology",
    info: "Harman Kadon Onyx Studio Mini,",
    intro: "Review & Experience",
    day: "Feb 21, 2021",
    by: " by drfurion",
}

function render(tech) {
    return (
        <>
            <div className="card2">
                <div className="card2-descriptions">
                    <div className="img2-des">
                        <img src={tech.image} className="imageBS3" alt="error"></img>
                    </div>
                    <div>
                        <p className="name">{tech.name}</p>
                    </div>
                    <div className="prof2-des">
                       
                        
                        <div className="info1">{tech.info}</div>
                        
                       
                    
                        <div className="intro">{tech.intro}</div>
                    <div className='distant'>
                        <span className="text1">{tech.day}</span> 

                        <span className="text2">{tech.by}</span>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}



export default function Basic3() {
  return (
    <div>{render(techno)}</div>
  )
}
