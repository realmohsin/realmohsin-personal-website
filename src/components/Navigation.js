import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  handleClick = e => {
    const listOfLinks = document.querySelectorAll('nav li a')
    if (!e.target.checked) {
      setTimeout(() => {
        for (let link of listOfLinks) {
          link.style.display = 'none'
        }
      }, 400)
    } else {
      for (let link of listOfLinks) {
        link.style.display = 'inline-block'
      }
    }
    this.setState({
      checked: e.target.checked
    })
  }

  handleMouseDown = e => {
    e.preventDefault()
  }

  render () {
    return (
      <div css={navCss}>
        <input
          type='checkbox'
          css={navCheckboxCss}
          id='navi-toggle'
          checked={this.state.checked}
          onChange={this.handleClick}
        />

        <label
          htmlFor='navi-toggle'
          id='nav-button'
          css={navButtonCss}
          onMouseDown={this.handleMouseDown}
        >
          <span id='nav-icon' css={navIconCss}>
            &nbsp;
          </span>
        </label>

        <div id='nav-bg' css={navBgCss}>
          &nbsp;
        </div>

        <nav css={navOverlayCss}>
          <ul css={navListCss}>
            <li>
              <Link to='/' css={navLinkCss} onClick={this.handleClick}>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Home &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp;
              </Link>
            </li>
            <li>
              <Link
                to='/#first-project-id'
                css={navLinkCss}
                onClick={this.handleClick}
              >
                CryptoPrice{' '}
              </Link>
            </li>
            <li>
              <Link
                to='#second-project-id'
                css={navLinkCss}
                onClick={this.handleClick}
              >
                Company Meetings{' '}
              </Link>
            </li>
            <li>
              <Link to='#about-id' css={navLinkCss} onClick={this.handleClick}>
                &nbsp; &nbsp; &nbsp; About Me &nbsp; &nbsp; &nbsp;
              </Link>
            </li>
            <li>
              <Link to='/resume' css={navLinkCss} onClick={this.handleClick}>
                &nbsp; &nbsp; &nbsp; Resume &nbsp; &nbsp; &nbsp;
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

const navCss = css`
  font-size: 12px;
  font-weight: 400;

  @media (max-width: 1800px) {
    font-size: 10px;
  }
  @media (max-width: 1200px) {
    font-size: 9.32px;
  }
  @media (max-width: 900px) {
    font-size: 8.64px;
  }
`

const navCheckboxCss = css`
  display: none;

  &:checked ~ nav {
    opacity: 1;
    width: 100%;
  }

  &:checked ~ #nav-bg {
    transform: scale(80);
    @media (max-width: 600px) {
      transform: scale(45);
    }
  }

  &:checked + #nav-button #nav-icon {
    background-color: transparent;
  }

  &:checked + #nav-button #nav-icon::before {
    top: 0;
    transform: rotate(135deg);
  }

  &:checked + #nav-button #nav-icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`

const navButtonCss = css`
  background-color: #fff;
  height: 7em;
  width: 7em;
  position: fixed;
  top: 6em;
  right: 6em;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1em 3em rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  @media (max-width: 900px) {
    top: 4em;
    right: 4em;
  }
  @media (max-width: 600px) {
    top: 3em;
    right: 3em;
    height: 5em;
    width: 5em;
  }

  &:hover #nav-icon::before {
    top: -1em;
    @media (max-width: 600px) {
      top: -0.7em;
    }
  }

  &:hover #nav-icon::after {
    top: 1em;
    @media (max-width: 600px) {
      top: 0.7em;
    }
  }
`

const navBgCss = css`
  height: 6em;
  width: 6em;
  border-radius: 50%;
  position: fixed;
  top: 6.5em;
  right: 6.5em;
  background-image: radial-gradient(#d4841a, #e96b2d);
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  backface-visibility: hidden;
  transform: translateZ(0);
  @media (max-width: 900px) {
    top: 4.5em;
    right: 4.5em;
  }
  @media (max-width: 600px) {
    top: 3.2em;
    right: 3.2em;
    height: 4.5em;
    width: 4.5em;
  }
`

const navOverlayCss = css`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

const navListCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
  & > li {
    margin: 1em;
  }
`

const navLinkCss = css`
  &:link,
  &:visited {
    display: none;
    font-size: 3em;
    font-weight: 300;
    padding: 1em 2em;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-size: 220%;
    transition: all 0.4s;

    @media (max-width: 600px) {
      font-size: 2em;
    }
    @media (max-width: 350px) {
      font-size: 1.6em;
    }
  }

  &:link span,
  &:visited span {
    margin-right: 1.5em;
    display: inline-block;
  }

  &:hover,
  &:active {
    background-position: 100%;
    color: #ffb900;
    transform: translateX(1em);
  }
`

const navIconCss = css`
  position: relative;
  margin-top: 3.5em;
  width: 3em;
  height: 2px;
  background-color: #333;
  display: inline-block;

  @media (max-width: 600px) {
    margin-top: 2.4em;
    width: 2.4em;
    height: 1.6px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: all 0.2s;
    width: 3em;
    height: 2px;
    background-color: #333;
    display: inline-block;
    @media (max-width: 600px) {
      width: 2.4em;
      height: 1.6px;
    }
  }

  &::before {
    top: -0.8em;
    @media (max-width: 600px) {
      top: -0.7em;
    }
  }

  &::after {
    top: 0.8em;
    @media (max-width: 600px) {
      top: 0.7em;
    }
  }
`

export default Navigation
