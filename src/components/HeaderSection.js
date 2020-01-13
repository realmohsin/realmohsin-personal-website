import React from 'react'
import { css } from '@emotion/core'
import colors from '../emotion/colors'

class HeaderSection extends React.Component {
  render () {
    return (
      <header css={headerCss}>
        <div>
          <h1>{this.props.primaryTitle}</h1>
          <h2>{this.props.secondaryTitle}</h2>
        </div>
      </header>
    )
  }
}

const headerCss = css`
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 185, 0, 0.7),
      rgba(255, 119, 48, 0.7)
    ),
    url('/bg-header.jpg');
  background-size: cover;
  background-position: 45% 40%;
  height: 970px;
`

export default HeaderSection
