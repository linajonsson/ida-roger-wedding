import React from "react"
import lisaKajsa from "../../images/lisa-kajsa.jpeg"

const ToastMadames = () => (
  <div className="toastmadames">
    <span className="anchor" id="toastmadames" />
    <h3>Toastmadames</h3>
    <div className="toastmadames-text">
      <p>
        Vi är otroligt glada att våra fantastiska vänner Lisa Englund och Kajsa
        Wahlstedt har åtagit sig uppdraget att hålla i taktpinnen under
        bröllopsdagen.
      </p>
      <p>
        Vi lärde känna Lisa och Kajsa under vår första termin på
        juristutbildningen i Uppsala. Kajsa, dock mer känd som Kaj, charmade oss
        tidigt med sin breda värmländska när hon utan minsta ansträngning lät
        som hon var plockad från sommarprogrammet Hajk. Lisa som 2011 lämnade
        hennes kära Alfta för Uppsala har vi kanske anledning att tacka särskilt
        för detta bröllop då hon ihärdigt i många år frågat Roger om han inte
        friat till Ida än.
      </p>
      <p>
        Sedan 2011 har dessa två personer utgjort viktiga medlemmar i Idas
        beryktade Latteliga och nära vänner till oss båda.
      </p>
      <p>
        Vill du hålla tal får du gärna anmäla det till Lisa eller Kajsa på
        kontaktuppgifterna nedan. De vill gärna veta vilken relation du har till
        oss, vad du vill göra (t.ex. tal, spex eller lek), om du behöver någon
        särskild utrustning (t.ex. projektor) och ungefär hur lång tid det
        kommer att ta.
      </p>
      <div className="toastmadames-details">
        <div>Lisa Englund </div>
        <div>073 039 47 62</div>
        <div> Mailadress</div>
      </div>
      <div>
        <div> Kajsa Wahlstedt</div>
        <div> 072 730 62 61</div>
        <div> Mailadress</div>
      </div>
    </div>
    <img src={lisaKajsa} alt="toastmadames"></img>
  </div>
)

export default ToastMadames
