import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import PropTypes from "prop-types"
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const ProjectTile = ({mW, project}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth:800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      browserbuddies: file(relativePath: { eq: "browserbuddies.png" }) {
        childImageSharp {
          fluid(maxWidth:300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      batterymanager: file(relativePath: { eq: "batterymanager.png" }) {
        childImageSharp {
          fluid(maxWidth:300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      passwordgenerator: file(relativePath: { eq: "passwordgenerator.png" }) {
        childImageSharp {
          fluid(maxWidth:300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data[project].childImageSharp.fluid} style={{minWidth:mW}} imgStyle={{objectFit:'contain'}}/>
}
ProjectTile.propTypes = {
   mW: PropTypes.string,
   project: PropTypes.string
  }
  
  ProjectTile.defaultProps = {
    mW: `33.33%`,
    project: 'placeholderImage'
  }
  
export default  ProjectTile