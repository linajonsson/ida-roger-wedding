import React from "react"
import { transportationInfo } from "./transportationInfo"
import car from "../../images/icons/directions_car-24px.svg"
import train from "../../images/icons/train-24px.svg"

const icons = [car, train]

const Transportation = () => (
  <div className="container" id="transportation">
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
        <p>
          <div className="alternatives">
            <img src={icons[index]} alt="icon"></img>
            <div className="subheader">{a.header}</div>
          </div>
          {<div>{a.text}</div>}
        </p>
      )
    })}
  </div>
)
