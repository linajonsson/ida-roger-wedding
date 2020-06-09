import React from "react"

const Menu = () => (
  <div className="menu">
    {menuTabs.map(tab => {
      return <MenuLink id={tab.id} text={tab.text} />
    })}
  </div>
)

export default Menu

export const MenuLink = ({ id, text, click }) => (
  <>
    <div className="menu-link">
      <a href={`#${id}`} onClick={click}>
        {text}
      </a>
    </div>
    <div className="border"></div>
  </>
)

export const menuTabs = [
  { id: "welcome", text: "Välkommen" },
  { id: "destination", text: "Platsen" },
  { id: "accomodation", text: "Boende" },
  { id: "transportation", text: "Hur tar man sig dit?" },
  { id: "happenings", text: "Happenings" },
  { id: "dresscode", text: "Klädkod" },
  { id: "toastmadames", text: "Toastmadames" },
  { id: "surroundings", text: "Omgivningen" },
  { id: "weddingGift", text: "Bröllopsgåva" },
]
