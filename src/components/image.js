import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Image = ({src}) => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "mesqr.jpg" }) {
        childImageSharp {
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 320, height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      youi: file(relativePath: { eq: "youiLogo.png" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fixed={data[src].childImageSharp.fixed} />
}

Image.propTypes = {
  src: PropTypes.string,
 }
 
Image.defaultProps = {
   src: `gatsby-astronaut.png`,
 }
 
export default Image
