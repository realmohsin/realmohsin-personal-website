import React from 'react'
import { css } from '@emotion/core'
import colors from '../emotion/colors'

const GradientSection = props => {
  return (
    <div css={gradientSectionCss}>
      <h3>gradient section</h3>
    </div>
  )
}

const gradientSectionCss = css`
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 185, 0, 0.7),
      rgba(255, 119, 48, 0.7)
    ),
    url('/header-background.jpg');
  background-size: cover;
  background-position: 45% 40%;
  height: 970px;
  margin-top: -115px;
  padding: 115px 0;
`

export default GradientSection
