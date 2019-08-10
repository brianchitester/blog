import React from "react"
import { Link } from "gatsby"
import HeroImage from "./heroImage.js"
import Bio from "../components/bio"
import Chance from "chance"

import styles from "./layout.module.less"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const chance = new Chance()
    const quoteList = [
      "Everything has its beauty, but not everyone sees it.",
      "Be water my friend.",
      "Be kind, for everyone you meet is fighting a hard battle.",
    ]
    const quote =
      quoteList[chance.integer({ min: 0, max: quoteList.length - 1 })]
    return (
      <div className={styles.body}>
        <header className={styles.header}>
          <h1>
            <Link to={`/`}>{title}</Link>
          </h1>
          <a className={styles.email} href="mailto:brianchitester@gmail.com">
            brianchitester@gmail.com
          </a>
        </header>
        {location.pathname === rootPath && <HeroImage />}
        <main className={styles.postList}>{children}</main>
        <footer className={styles.footer}>
          <Bio />
          <p>{quote}</p>
        </footer>
      </div>
    )
  }
}

export default Layout
