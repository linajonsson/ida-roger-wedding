import React from "react"
import * as happeningsInfo from "./happeningsInfo"

const Happenings = () => (
  <div>
    {happeningsInfo.map(happening => {
      return (
        <HappeningBlock
          img=""
          header={happening.header}
          events={happening.events}
        />
      )
    })}
  </div>
)

export default Happenings

const HappeningBlock = ({ img, header, events }) => (
  <div style={{ color: "red" }}>
    <img alt="" src={img}></img>
    <div>{header}</div>
    <div>
      {events.map(event => {
        return <p>{event}</p>
      })}
    </div>
  </div>
)
