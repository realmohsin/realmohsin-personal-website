import styled from '@emotion/styled'
import { css } from '@emotion/core'
import colors from '../colors'

const Button = styled.a`
  font-size: 21px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${colors.primaryOne};
      color: #fff;
      &:focus {
        outline: none;
      }
      &::after {
        background-color: $color-primary;
      }
    `}

  ${props =>
    props.white &&
    css`
      background-color: #fff;
      color: ${colors.grayThree};
      opacity: 0;
      &::after {
        background-color: #fff;
      }
    `}
`

export default Button
