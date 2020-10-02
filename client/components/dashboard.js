import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'
// import Header from './header'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="flex items-center justify-center h-100%">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Dashboard
        </div>
      </div>
      <div>
        <Link to="/dashboard/profile/ebf02c27-f6b9-4943-a054-a8308e41a8e6">Go o Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
