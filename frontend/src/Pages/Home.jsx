import React from 'react'
import NavBar from '../Components/NavBar'

const Home = () => {
  return (
    <div>
      {/* Navbar should be displayed here */}
      <NavBar />

      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        <p className="text-gray-600 mt-2">
          This is your homepage content.
        </p>
      </div>
    </div>
  )
}

export default Home
