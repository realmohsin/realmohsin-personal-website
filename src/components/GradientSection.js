import React from 'react'
import { css } from '@emotion/core'
import colors from '../emotion/colors'

const GradientSection = props => {
  return (
    <section css={gradientSectionCss}>
      <h3>gradient section</h3>
    </section>
  )
}

const gradientSectionCss = css`
  background-image: linear-gradient(
      to right bottom,
      rgba(255, 185, 0, 0.7),
      rgba(255, 119, 48, 0.7)
    ),
    url('/bg-gradient-section.jpg');
  background-size: 160%;
  background-position: 45% 55%;
  max-height: 1235px;
  margin-top: -115px;
  padding: 115px 55px;

  @media (max-width: 1725px) {
    background-size: 185%;
    background-position: 45% 45%;
  }
`

export default GradientSection
