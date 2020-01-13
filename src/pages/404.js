import React from 'react'
import { Helmet } from 'react-helmet'

class NotFound extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Real Mohsin - Web Developer</title>
          <meta
            name='description'
            content='Real Mohsin - Web Developer. Freelance Software Designer and Engineer creating high-end websites and applications for the Internet. Based in New York City but available around the world.'
          />
        </Helmet>
        404
      </div>
    )
  }
}

export default NotFound
