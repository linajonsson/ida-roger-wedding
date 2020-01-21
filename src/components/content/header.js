import React, { useState } from "react"
import hamburgerMenu from "../../images/hamburger-menu.svg"
import { MenuLink } from "../content/menu"
import { menuTabs } from "../content/menu"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
      <div className="header-container">
        <img
          src={hamburgerMenu}
          className="hamburger-menu"
          onClick={() => {
            setMenuOpen(!menuOpen)
          }}
        ></img>
        <div className="header-heading">Ida & Roger</div>
        <div className="header-text">11/9/2020 - 13/9/2020</div>
        <div className="header-text">Piemonte | Italien</div>
      </div>
    </>
  )
}

export default Header
const Menu = ({ setMenuOpen }) => (
  <div className="menu-mobile-overlay">
    <div className="menu-mobile-container">
      {menuTabs.map(tab => {
        return (
          <MenuLink
            id={tab.id}
            text={tab.text}
            click={() => {
              setMenuOpen(false)
            }}
          />
        )
      })}
    </div>
  </div>
)
