import React from 'react'
import { css } from '@emotion/core'
import Button from '../emotion/styled-components/Button'
import { moveInLeft, moveInRight, moveInBottom } from '../emotion/animations'

class HeaderSection extends React.Component {
  imgRef = React.createRef()
  state = { hasLogoLoaded: false }

  componentDidMount () {
    const img = this.imgRef.current
    const addAnimation = () =>
      setTimeout(() => this.setState({ hasLogoLoaded: true }), 300)

    if (img && img.complete) {
      addAnimation()
    } else {
      this.imgDownloadedListener = () => addAnimation()
      img.addEventListener('load', this.imgDownloadedListener)
    }
  }

  componentWillUnmount () {
    this.imgRef.current.removeEventListener('load', this.imgDownloadedListener)
  }

  render () {
    const { hasLogoLoaded } = this.state
    return (
      <header css={headerCss}>
        <div css={logoContainerCss}>
          <img
            src='/signature.svg'
            alt='Logo'
            css={logoCss}
            ref={this.imgRef}
          />
        </div>
        <div css={animationContainerCss}>
          <h1
            id='primary-title'
            css={css`
              ${primaryTitleCss};
              ${hasLogoLoaded && primaryTitleAnimation}
            `}
          >
            {this.props.primaryTitle}
          </h1>
          <h2
            id='secondary-title'
            css={css`
              ${secondaryTitleCss};
              ${hasLogoLoaded && secondaryTitleAnimation}
            `}
          >
            {this.props.secondaryTitle}
          </h2>
          <Button
            white
            id='begin-button'
            css={css`
              ${hasLogoLoaded && buttonAnimation}
            `}
          >
            Lets Begin
          </Button>
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
  background-position: 47% 40%;
  max-height: 100vh;
  height: 970px;
  position: relative;

  @media (max-width: 900px) {
    background-position: 50% 40%;
  }
  @media (max-width: 445px) {
    background-position: 50% 30%;
    background-size: 300%;
  }
`

const animationContainerCss = css`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    top: 38%;
  }

  @media (max-width: 390px) {
    top: 40%;
  }
`

const sharedTitleCss = css`
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  backface-visibility: hidden;
  text-shadow: 0px 0px 5px black;
`

const primaryTitleCss = css`
  ${sharedTitleCss};
  font-size: 78px;
  margin-bottom: 10px;
  letter-spacing: 4px;
  opacity: 0;

  @media (max-width: 1350px) {
    font-size: 72px;
  }

  @media (max-width: 1035px) {
    font-size: 64px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }
`

const primaryTitleAnimation = css`
  animation: ${moveInLeft} 1s ease-out forwards;
`

const secondaryTitleCss = css`
  ${sharedTitleCss};
  font-size: 28px;
  margin-bottom: 60px;
  opacity: 0;
  letter-spacing: 3px;

  @media (max-width: 1350px) {
    font-size: 26px;
  }

  @media (max-width: 1035px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const secondaryTitleAnimation = css`
  animation: ${moveInRight} 1s ease-out forwards;
`

const buttonAnimation = css`
  animation: ${moveInBottom} 0.5s ease-out 0.75s forwards;
`

const logoContainerCss = css`
  position: absolute;
  top: 30px;
  left: 25px;

  @media (max-width: 1800px) {
    top: 25px;
    left: 5px;
  }

  @media (max-width: 600px) {
    top: 13px;
    left: 0rem;
  }
`

const logoCss = css`
  height: 110px;

  @media (max-width: 1800px) {
    height: 85px;
  }

  @media (max-width: 600px) {
    height: 60px;
  }
`

export default HeaderSection
