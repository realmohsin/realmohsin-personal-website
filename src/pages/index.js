import React from 'react'
import Layout from '../components/Layout'
import GraySection from '../components/GraySection'
import GradientSection from '../components/GradientSection'

class HomePage extends React.Component {
  render () {
    return (
      <Layout>
        <GraySection />
        <GradientSection />
        <GraySection />
        <GradientSection />
        <GraySection />
        <GradientSection />
        <GraySection />
      </Layout>
    )
  }
}

export default HomePage
