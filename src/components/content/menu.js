import React from "react"
import WelcomeText from "./welcomeText"

const Menu = () => (
  <div className="menu">
    {menuTabs.map(tab => {
      return <MenuLink id={tab.id} text={tab.text} />
    })}
  </div>
)

export default Menu

const MenuLink = ({ id, text }) => (
  <>
    <div className="menu-link">
      <a href={`#${id}`}> {text}</a>
    </div>
    <div className="border"></div>
  </>
)

const menuTabs = [
  { id: "welcome", text: "Välkommen" },
  { id: "destination", text: "Platsen" },
  { id: "accomodation", text: "Boende" },
  { id: "transportation", text: "Hur tar man sig dit?" },
  { id: "happenings", text: "Happenings" },
  { id: "rsvp", text: "OSA" },
  { id: "toastmadames", text: "Toastmadames" },
]
