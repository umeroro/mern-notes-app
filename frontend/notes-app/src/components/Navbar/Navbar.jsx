import React from 'react'
import ProfileInfo from '../Cards/ProfileInfo'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const onLogout = () => {
    navigate("/login");
  }

  return (
    <div className="bg-white flex item-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-x1 font-medium text-black py-2">Notes</h2>

      <ProfileInfo onLogout={onLogout} />
    </div>
  )
}

export default Navbar