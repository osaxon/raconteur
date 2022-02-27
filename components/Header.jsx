import React from 'react'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

function Header() {
  const { user, login, logout } = useContext(AuthContext)
  return (
    <>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <h1 className="text-5xl">Raconteur</h1>
          <ul className="flex items-center gap-x-3">
            <li>Stuff</li>
            <li>Other stuff</li>
            <button
              className="hover:bg-blue-50- rounded-full border-2 border-gray-800 px-8 py-2 text-gray-800 transition-all  hover:bg-gray-50"
              onClick={!user ? login : logout}
            >
              {!user ? 'Login / Singup' : 'Logout'}
            </button>
          </ul>
        </div>
      </nav>
      <header className="bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-50"></h1>
        </div>
      </header>
    </>
  )
}

export default Header
