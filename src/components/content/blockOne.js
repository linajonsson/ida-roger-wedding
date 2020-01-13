import React from "react"
import idaRoger from "../../images/ida-roger-cropped.jpeg"

const BlockOne = () => (
  <div className="block-one">
    <img src={idaRoger} alt=""></img>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        alignContent: "center",
        margin: "auto",
      }}
    >
      <div className="block-one-heading">Ida & Roger</div>
      <div>11/9/2020 - 13/9/2020</div>
      <div>Piemonte | Italien</div>
    </div>
  </div>
)

export default BlockOne
