import React from "react"
import idaRoger from "../../images/ida-roger-cropped.jpeg"

const BlockOne = () => (
  <div className="block-one">
    <div className="block-one-container">
      <div className="block-one-heading">Ida & Roger</div>
      <div className="block-one-text">11/9/2020 - 13/9/2020</div>
      <div className="block-one-text">Piemonte | Italien</div>
    </div>
    <img src={idaRoger} alt="" className="block-one-img-mobile"></img>
  </div>
)

export default BlockOne
