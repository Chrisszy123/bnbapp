'use client'

import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Search from './Search'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <div className='fixed z-10 shadow-sm bg-white w-full'>
        <div className='py-4 border-b-[5px]'>
            <Container>
                <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                    <Logo />
                    <Search />
                    <UserMenu />
                </div> 
            </Container>
        </div>
    </div>
  )
}

export default Navbar