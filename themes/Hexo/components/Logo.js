import Link from 'next/link'
import BLOG from '@/blog.config'
import React from 'react'

const Logo = () => {
  return <Link href='/' passHref>
        <div className='flex flex-col justify-center items-center cursor-pointer bg-black space-y-3  font-bold'>
          <div className='font-serif text-xl text-white'> {BLOG.TITLE}</div>
        </div>
  </Link>
}
export default Logo
