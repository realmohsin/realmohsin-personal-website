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
        <div className='header__logo-box'>
          <img
            src='/signature.svg'
            alt='Logo'
            className='header__logo'
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
  background-position: 45% 40%;
  max-height: 100vh;
  height: 970px;
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

  @media (max-width: 350px) {
    top: 40%;
  }
`

const titleCss = css`
  color: #fff;
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 40px;
  text-shadow: 0px 0px 5px black;
`

const primaryTitleCss = css`
  ${titleCss};
  font-size: 90px;
  font-weight: 400;
  opacity: 0;
`

const primaryTitleAnimation = css`
  animation: ${moveInLeft} 1s ease-out forwards;
`

const secondaryTitleCss = css`
  ${titleCss};
  margin-bottom: 80px;
  opacity: 0;
`

const secondaryTitleAnimation = css`
  animation: ${moveInRight} 1s ease-out forwards;
`

const buttonAnimation = css`
  animation: ${moveInBottom} 0.5s ease-out 0.75s forwards;
`

export default HeaderSection
