import React from "react"
import { transportationInfo } from "./transportationInfo"
import car from "../../images/icons/directions_car-24px.svg"
import train from "../../images/icons/train-24px.svg"

const icons = [car, train]

const Transportation = () => (
  <div className="container">
    <span className="anchor" id="transportation" />
    <h3>Hur tar man sig dit?</h3>
    <div className="container-text">
      <p>
        Till Relais Sant’Uffizio tar ni er enklast genom att flyga till Milano
        eller Turin.
      </p>
      {transportationInfo.map((info, index) => {
        return (
          <TransportationBlock
            key={index}
            header={info.header}
            text={info.text}
            alternatives={info.children}
          />
        )
      })}
      <div className="transportation-block">
        <div className="header">Taxiservice</div>
        <p>Vi har mottagit nedan indikativa priser för transport till Relais Sant Uffizio. Priserna gäller för taxi fyra platser/minibuss 8 platser/minibuss 16 platser.</p> 
         <p>Från Milano Malpensa till Relais Sant Uffizio: 3000/3800/5000 kronor</p> 
         <p>Från Milano Linate till Relais Sant Uffizio: 3000/3800/5000 kronor</p> 
         <p>Från Milano Bergamo Airport till Relais Sant Uffizio: 3800/4500/5750 kronor</p>
      </div>
    </div>
  </div>
)

export default Transportation

const TransportationBlock = ({ header, text, alternatives }) => (
  <div className="transportation-block">
    <div className="header">{header}</div>
    <p>{text}</p>
    {alternatives.map((a, index) => {
      return (
        <div className="container-box">
          <div className="alternatives">
            <img src={icons[index]} alt="icon"></img>
          </div>
          <div>{a.text}</div>
        </div>
      )
    })}
  </div>
)
