import React from 'react'

import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { userName } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title" className="flex items-center justify-center h-100% ">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Profile
        </div>
      </div>
      <div>
        <Link to="/dashboard/">Go to Root </Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go to Main </Link>
      </div>
      <div id="username">{userName}</div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
