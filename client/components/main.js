import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Main
        </div>
      </div>
      <div>
        <Link to="/dashboard/profile/ebf02c27-f6b9-4943-a054-a8308e41a8e6">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
