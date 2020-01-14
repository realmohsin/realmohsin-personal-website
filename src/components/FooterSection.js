import React from 'react'
import { Link } from 'gatsby'

const FooterSection = props => (
  <footer id='test' className='footer'>
    <div className='footer__logo-box'>
      <img
        className='footer__logo-img'
        src='/signature-v2.svg'
        alt='footerLogo'
      />
    </div>
    <div className='row'>
      <div className='col-1-of-2'>
        <div className='footer__navigation'>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a
                onClick={props.handleGoingToHeader}
                href='#'
                className='footer__link'
              >
                Home
              </a>
            </li>
            <li className='footer__item'>
              <a
                onClick={props.handleGoingToPort}
                href='#'
                className='footer__link'
              >
                Portfolio
              </a>
            </li>
            <li className='footer__item'>
              <a
                href='https://github.com/realmohsin'
                target='_blank'
                className='footer__link'
                rel='noopener'
              >
                Github
              </a>
            </li>
            <li className='footer__item'>
              <Link to='/resume' className='footer__link'>
                Resume
              </Link>
            </li>
            <li className='footer__item'>
              <a href='mailto:realmohsin@outlook.com' className='footer__link'>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-1-of-2'>
        <p className='footer__copyright'>
          &copy; 2018 by
          <a
            onClick={props.handleGoingToHeader}
            href='#'
            className='footer__link'
          >
            {' '}
            &nbsp;Real Mohsin&nbsp;{' '}
          </a>
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default FooterSection
