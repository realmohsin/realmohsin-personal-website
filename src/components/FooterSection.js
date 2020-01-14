import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import SectionGrid from './SectionGrid'
import colors from '../emotion/colors'

const FooterSection = props => (
  <footer id='test' className='footer' css={footerSectionCss}>
    <div className='footer__logo-box' css={logoContainerCss}>
      <img
        className='footer__logo-img'
        src='/signature-v2.svg'
        alt='footerLogo'
      />
    </div>

    <SectionGrid>
      <div css={leftColumnCss}>
        <ul css={cellContainerCss}>
          <li css={footerItemCss}>
            <a onClick={props.handleGoingToHeader} href='#' css={footerLinkCss}>
              Home
            </a>
          </li>
          <li css={footerItemCss}>
            <a onClick={props.handleGoingToPort} href='#' css={footerLinkCss}>
              Portfolio
            </a>
          </li>
          <li css={footerItemCss}>
            <a
              href='https://github.com/realmohsin'
              target='_blank'
              rel='noopener'
              css={footerLinkCss}
            >
              Github
            </a>
          </li>
          <li css={footerItemCss}>
            <Link to='/resume' css={footerLinkCss}>
              Resume
            </Link>
          </li>
          <li css={footerItemCss}>
            <a href='mailto:realmohsin@outlook.com' css={footerLinkCss}>
              Email
            </a>
          </li>
        </ul>
      </div>

      <div css={rightColumnCss}>
        <div css={cellContainerCss}>
          <p>
            &copy; 2018 by
            <a
              onClick={props.handleGoingToHeader}
              href='#'
              css={footerLinkRightCss}
            >
              {' '}
              &nbsp;Real Mohsin&nbsp;{' '}
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </SectionGrid>
  </footer>
)

const footerSectionCss = css`
  font-size: 20px;
  padding: 80px 250px;
  background-color: ${colors.grayFour};
  margin-top: -95px;
  position: relative;
  z-index: 100;
`

const logoContainerCss = css`
  text-align: center;
  margin-bottom: 35px;
`

const leftColumnCss = css``

const rightColumnCss = css`
  color: ${colors.grayTwo};
`

const cellContainerCss = css`
  border-top: 1px solid ${colors.grayThree};
  padding-top: 20px;
  display: flex;
`

const footerItemCss = css`
  &:not(:last-child) {
    margin-right: 20px;
  }
`

const footerLinkCss = css`
  &:link,
  &:visited {
    display: block;
    text-decoration: none;
    color: ${colors.grayThree};
    text-transform: uppercase;
    background-color: ${colors.grayFour};
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    color: ${colors.primaryOne};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px) scale(1.3);
  }
`

const footerLinkRightCss = css`
  ${footerLinkCss};
  &:link,
  &:visited {
    display: inline-block;
    margin: 0 5px;
  }
`

export default FooterSection
