import React from 'react'
import Basic1 from './Basic1/Basic1'
import Basic2 from './Basic2/Basic2'
import Basic3 from './Basic3/Basic3'
import ChartBar from './ChartBar/ChartBar'




const unline = {
    marginTop: '20px',
    marginBottom: '20px',
}

export default function 
() {
  return (
    <div>
        <Basic1/>

        <div style={unline}><hr></hr></div>

        <Basic2/>

        <div style={unline}><hr/></div>

        <Basic3/>

        <div style={unline}><hr/></div>

        <ChartBar text='BANDWIDTH' color1='#E44D4C' color2='#F75354' percentage={20} />
        <ChartBar text='STORAGE' color1='#2DB8CD' color2='#2DB8CD' percentage={50} />
        <ChartBar text='USERS' color1='#4AC25E' color2='#51D567' percentage={70} />
        <ChartBar text='VISITORS' color1='#E9C318' color2='#FCD518' percentage={30} />
        <ChartBar text='EMAIL' color1='#b26ac9' color2='#cb79e7' percentage={45} />
        <ChartBar text='BASIC' color1='#ec58d6' color2='#fe60e8' percentage={80} />
        <ChartBar text='OTHERS' color1='#5791d9' color2='#609bec' percentage={37} />

        <div style={unline}><hr/></div>

        

         
    </div>



  )
}
