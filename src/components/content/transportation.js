import React from "react"
import * as transportationInfo from "./transportationInfo"
import car from "../../images/icons/directions_car-24px.svg"
import train from "../../images/icons/train-24px.svg"

const icons = [car, train]

const Transportation = () => (
  <div className="transportation" id="transportation">
    <h3>Hur tar man sig dit?</h3>
    Till Relais Sant’Uffizio tar ni er enklast genom att flyga till Milano eller
    Turin.
    {transportationInfo.map(info => {
      return (
        <TransportationBlock
          header={info.header}
          text={info.text}
          alternatives={info.children}
        />
      )
    })}
  </div>
)

export default Transportation

const TransportationBlock = ({ header, text, alternatives }) => (
  <div style={{ padding: "1rem 0" }}>
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
