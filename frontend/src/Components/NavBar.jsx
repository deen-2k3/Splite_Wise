import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Services/apis'
import Cookies from 'js-cookie'

const NavBar = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      Cookies.remove('token') // remove cookie
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const isLoggedIn = !!Cookies.get('token') // check cookie

  return (
    <nav className='flex justify-end gap-4 p-4 bg-gray-100 shadow-md'>
      {!isLoggedIn ? (
        <>
          <Link to='/login'>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition'>
              Login
            </button>
          </Link>
          <Link to='/signup'>
            <button className='px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition'>
              Sign Up
            </button>
          </Link>
        </>
      ) : (
        <button
          onClick={handleLogout}
          className='px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition'
        >
          Logout
        </button>
      )}
    </nav>
  )
}

export default NavBar
