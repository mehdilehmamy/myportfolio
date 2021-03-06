import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"}
              </h1>
              <h1>
                {" "}
                {data.headerTagline[2]
                  ? data.headerTagline[2]
                  : "and experience"}
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <button
            onClick={() => scrollTo("#work")}
              className="primary-btn"
              style={{fontSize: "1rem", padding:"1rem 2rem"}}
            >
              PORTFOLIO
            </button>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
