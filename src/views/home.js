import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Future Response Administrator</title>
        <meta property="og:title" content="Future Response Administrator" />
      </Helmet>
    </div>
  )
}

export default Home
