import React from "react"
import ExtraInfo from "./extraInfo"

const WelcomeText = () => (
  <div className="container">
    <span className="anchor" id="welcome" />

    <h3>Allora! </h3>
    <ExtraInfo />
    <div className="container-text">
      <p>
        Vi gifter oss och vår önskan är att ni vill fira det tillsammans med oss
        bland vinrankor och vackra vyer i Piemonte, Italien!
      </p>
      <p>
        Vi vet att det är mycket begärt att ta sig hela vägen till Italien för
        att fira vårt bröllop. För att underlätta resan har vi här samlat all
        information som ni kan tänkas behöva om platsen, vigseln, festen,
        transporten, boendet och andra praktiska detaljer.{" "}
      </p>
      <p>Vi ser verkligen fram emot att få dela den här helgen med er!</p>
      <p>
        Information såsom hålltider för helgens happenings kommer att uppdateras
        längre fram. Kika därför gärna in här med jämna mellanrum för att hålla
        er uppdaterade.
      </p>
      <div className="welcome--text">Massa kärlek, Ida och Roger</div>
    </div>
  </div>
)

export default WelcomeText
