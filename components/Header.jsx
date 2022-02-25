import React from 'react'
import { Fragment } from 'react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useContext } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header(props) {
  const page = props.page ? props.page : 'Page Title'
  return (
    <>
      <nav className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <h1 className="text-5xl">Raconteur</h1>
          <ul className="flex gap-x-3">
            <li>Stuff</li>
            <li>More stuff</li>
            <li>Other stuff</li>
          </ul>
        </div>
      </nav>
      <header className="bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-50">Hello</h1>
        </div>
      </header>
    </>
  )
}

export default Header
