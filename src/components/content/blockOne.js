import React from "react"
import idaRoger from "../../images/ida-roger-cropped.jpeg"

const BlockOne = () => (
  <div
    style={{
      background: "white",
      display: "grid",
      gridTemplateColumns: "50% auto",
    }}
  >
    <img src={idaRoger} alt="" style={{}}></img>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        alignContent: "center",
        margin: "auto",
        fontFamily: "Parisienne, cursive",
      }}
    >
      <div>Ida & Roger</div>
      <div>11/9/2020 - 13/9/2020</div>
      <div>Piemonte | Italien</div>
    </div>
  </div>
)

export default BlockOne
