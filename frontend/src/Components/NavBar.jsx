import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=''>
        <div className=''>
        <Link to='/login'>
        <button>
          Login
        </button>
        </Link>
      
    </div>
    
    <div className=''>
      <Link to ='/signup'>
      <button>
        SignUp
      </button>
      </Link>
    </div>
    <div className=''>
      <Link to='/logout'>
      <button>
        Logout
        </button>
        </Link>
    </div>
    
    </div>
  )
}

export default NavBar
