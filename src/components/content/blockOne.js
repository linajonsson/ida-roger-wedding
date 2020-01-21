import React, { useState } from "react"
import idaRoger from "../../images/ida-roger-cropped.jpeg"
import hamburgerMenu from "../../images/hamburger-menu.svg"
import { MenuLink } from "../content/menu"
import { menuTabs } from "../content/menu"

const BlockOne = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}
      <div className="block-one">
        <div className="block-one-container">
          <img
            src={hamburgerMenu}
            className="hamburger-menu"
            onClick={() => {
              setMenuOpen(!menuOpen)
            }}
          ></img>
          <div className="block-one-heading">Ida & Roger</div>
          <div className="block-one-text">11/9/2020 - 13/9/2020</div>
          <div className="block-one-text">Piemonte | Italien</div>
        </div>
        <img src={idaRoger} alt="" className="block-one-cover-image"></img>
      </div>
    </>
  )
}

export default BlockOne

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
