import type { NextPage } from 'next'
import Header from '../components/Header'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <div className="min-h-full">
        {/* <Header /> */}
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
