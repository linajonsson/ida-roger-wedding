import React from "react"
import SlideShow from "../slideShow"

const Destination = () => (
  <>
    <div className="destination">
      <span className="anchor" id="destination" />
      <div className="destination-text">
        <h3>Platsen för helgen</h3>
        <p>
          Vi har kommit att förälska oss i Piemonte med dess vackra vinmarker.
          Det var även i Piemonte som vi förlovade oss sommaren 2019.
        </p>
        <p>
          Platsen vi valt att gifta oss på heter Relais Sant’Uffizio och ligger
          i hjärtat av Piemonte, närmare bestämt utanför Asti. Relais
          Sant’Uffizo var ursprungligen ett kloster byggt 1542 och har på senare
          år genomgått en omsorgsfull restaurering. På området finns bland annat
          en renässansträdgård, citronodlingar, vinodlingar, tennisbana,
          inomhus- och utomhuspool samt en spaavdelning.
        </p>
        <p>
          Mer information om platsen hittar ni på{" "}
          <a href="http://www.relaissantuffizio.com" target="_blank">
            www.relaissantuffizio.com
          </a>
          .
        </p>
      </div>
    </div>

    <SlideShow />
  </>
)

export default Destination
