import React from 'react'
import { css } from '@emotion/core'

const SectionGrid = props => {
  return <div css={sectionGridCss}>{props.children}</div>
}

const sectionGridCss = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

export default SectionGrid
