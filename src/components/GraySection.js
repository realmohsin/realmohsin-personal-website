import React from 'react'
import { css } from '@emotion/core'
import colors from '../emotion/colors'

const GraySection = props => {
  return (
    <div css={graySectionCss}>
      <h3>hello</h3>
    </div>
  )
}

const graySectionCss = css`
  background-color: ${colors.grayOne};
  height: 985px;
  transform: skewY(-6deg);
  margin-top: -115px;
  padding: 115px 0;
  & > * {
    transform: skewY(6deg);
  }
`

export default GraySection
