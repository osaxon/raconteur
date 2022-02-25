import React from 'react'
import { Fragment } from 'react'
import Link from 'next/link'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useContext } from 'react'
import AuthContext from '../stores/authContext'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header(props) {
  const { user, login, logout } = useContext(AuthContext)
  const page = props.page ? props.page : 'Page Title'
  return (
    <>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <h1 className="text-5xl">Raconteur</h1>
          <ul className="flex items-center gap-x-3">
            <li>Stuff</li>
            <li>Other stuff</li>

            <>
              <button
                className="hover:bg-blue-50- rounded-full border-2 border-gray-800 px-8 py-2 text-gray-800 transition-all  hover:bg-gray-50"
                onClick={login}
              >
                Login / Signup
              </button>
            </>
            <>
              <button
                className="hover:bg-blue-50- rounded-full border-2 border-gray-800 px-8 py-2 text-gray-800 transition-all  hover:bg-gray-50"
                onClick={logout}
              >
                Logout
              </button>
            </>
          </ul>
        </div>
      </nav>
      <header className="bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-50">{user}</h1>
        </div>
      </header>
    </>
  )
}

export default Header
