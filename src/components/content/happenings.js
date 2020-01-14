import React from "react"
import * as happeningsInfo from "./happeningsInfo"
import hotel from "../../images/location-hotel.jpeg"
import hotelFasad from "../../images/SantUffizio-fasad.jpg"
import whine from "../../images/Vin.jpg"

const images = [whine, hotel, hotelFasad]

const Happenings = () => (
  <div className="happenings" id="happenings">
    <h3>Happenings</h3>

    {happeningsInfo.map((happening, index) => {
      return (
        <HappeningBlock
          key={index}
          img={images[index]}
          header={happening.header}
          events={happening.events}
        />
      )
    })}
  </div>
)

export default Happenings

const HappeningBlock = ({ img, header, events }) => (
  <div className="happenings-container">
    <img alt="" src={img}></img>
    <div>
      <div className="header">{header}</div>
      <div className="border"></div>
      <ul>
        {events.map(event => {
          return <li>{event}</li>
        })}
      </ul>
    </div>
  </div>
)
