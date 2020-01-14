import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import SectionGrid from './SectionGrid'
import Container from '../emotion/styled-components/Container'
import colors from '../emotion/colors'

const FooterSection = props => (
  <footer id='test' className='footer' css={footerSectionCss}>
    <div className='footer__logo-box' css={logoContainerCss}>
      <img css={signatureV2Css} src='/signature-v2.svg' alt='footerLogo' />
    </div>

    <Container maxWidth='1400px'>
      <SectionGrid>
        <div>
          <ul css={leftContentCss}>
            <li>
              <a
                onClick={props.handleGoingToHeader}
                href='#'
                css={footerLinkCss}
              >
                Home
              </a>
            </li>
            <li>
              <a onClick={props.handleGoingToPort} href='#' css={footerLinkCss}>
                Portfolio
              </a>
            </li>
            <li>
              <a
                href='https://github.com/realmohsin'
                target='_blank'
                rel='noopener'
                css={footerLinkCss}
              >
                Github
              </a>
            </li>
            <li>
              <Link to='/resume' css={footerLinkCss}>
                Resume
              </Link>
            </li>
            <li>
              <a href='mailto:realmohsin@outlook.com' css={footerLinkCss}>
                Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div css={rightContentCss}>
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
    </Container>
  </footer>
)

const footerSectionCss = css`
  padding: 80px 55px 100px;
  background-color: ${colors.grayFour};
  margin-top: -95px;
  position: relative;
  z-index: 100;

  @media (max-width: 600px) {
    padding: 60px 20px 80px;
  }

  @media (max-width: 405px) {
    padding: 60px 5px 80px;
  }

  @media (max-width: 395px) {
    font-size: 14px;
  }
`

const logoContainerCss = css`
  text-align: center;
  margin-bottom: 35px;
`

const gridCellCss = css`
  border-top: 1px solid ${colors.grayThree};
  padding-top: 20px;
  display: flex;
  width: 415px;

  @media (max-width: 1400px) {
    width: 360px;
  }

  @media (max-width: 405px) {
    width: 300px;
  }

  @media (max-width: 395px) {
    width: 280px;
  }
`

const leftContentCss = css`
  ${gridCellCss};
  margin-left: 20px;
  justify-content: space-between;
  @media (max-width: 1035px) {
    margin: 0 auto 50px;
  }
`

const rightContentCss = css`
  ${gridCellCss};
  color: ${colors.grayTwo};
  margin-left: auto;
  margin-right: 20px;
  & > p {
    margin: 0 auto;
  }
  @media (max-width: 1035px) {
    margin: 0 auto;
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

const signatureV2Css = css`
  @media (max-width: 600px) {
    width: 100%;
  }
`

export default FooterSection
