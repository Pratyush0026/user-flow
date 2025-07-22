import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>Test Page</h1>
        <Link 
          href="/login"
          className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-block'
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  )
}

export default page