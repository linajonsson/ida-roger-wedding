import React from "react"
import * as transportationInfo from "./transportationInfo"

const Transportation = () => (
  <div>
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
    <div>{header}</div>
    <div>{text}</div>
    {alternatives.map(a => {
      return (
        <>
          <div>{a.header}</div>
          {<div>{a.text}</div>}
        </>
      )
    })}
  </div>
)
