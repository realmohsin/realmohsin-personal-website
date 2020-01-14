import React from 'react'
import { Helmet } from 'react-helmet'
import { Global, css } from '@emotion/core'
import HeaderSection from './HeaderSection'
import FooterSection from './FooterSection'

class Layout extends React.Component {
  render () {
    return (
      <>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Real Mohsin | Software Developer</title>
          <meta
            name='description'
            content='Real Mohsin - Web Developer. Freelance Software Designer and Engineer creating high-end websites and applications for the Internet. Based in New York City but available around the world.'
          />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <Global styles={globalStyles} />
        <HeaderSection
          primaryTitle='Real Mohsin'
          secondaryTitle='Designer & Developer'
        />
        {this.props.children}
        <FooterSection />
      </>
    )
  }
}

const globalStyles = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding: 30px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  ul {
    list-style: none;
  }
`

export default Layout
