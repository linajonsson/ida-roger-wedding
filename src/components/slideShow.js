import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import nextArrow from "../images/icons/next.svg"
import backArrow from "../images/icons/back.svg"

const SlideShow = () => {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { relativeDirectory: { eq: "destination" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  console.log(allFile)

  //Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]
  return (
    <div className="slideshow">
      <div className="slideshow-images">
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, " ").substring(2)}
        />
      </div>
      <div>
        <div className="slideshow-btn left" onClick={() => handlePrevious()}>
          <img src={backArrow}></img>
        </div>
        <div className="slideshow-btn right" onClick={() => handleNext()}>
          <img src={nextArrow}></img>
        </div>
      </div>
    </div>
  )
}

export default SlideShow
