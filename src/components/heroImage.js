import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styles from "./heroImage.module.less"

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(absolutePath: { regex: "/cover.png/" }) {
        childImageSharp {
          fluid(maxWidth: 512, maxHeight: 339) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Image
      fluid={data.hero.childImageSharp.fluid}
      alt={"Listen to the vibration of the universe"}
      className={styles.heroImage}
      imgStyle={{
        display: "block",
      }}
    />
  )
}

export default HeroImage
