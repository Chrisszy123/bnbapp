'use client'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import {useState, useCallback} from 'react'
import MenuItem from './MenuItem'

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = useCallback(() => {
        setIsOpen((val) => !val) // set the state to the opposite
    }, [])

  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div onClick={() => {}} className="hidden md:block text-sm py-4 px-3 font-semibold rounded-full hover:bg-neutral-100 transition cursor-pointer">
                airbnb your home
            </div>
            <div onClick={toggleDropdown} className="p-4 md:py-1 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                <AiOutlineMenu />
                <div className='hidden md:block'>
                    <Avatar />
                </div>
            </div> 
        </div>
        {isOpen && (
            <div className='absolute w-[40vw] md:w-3/4 shadow-md overflow-hidden bg-white top-12 right-0 rounded-xl text-sm'> 
                <div className='flex flex-col cursor-pointer'>
                    <>
                        <MenuItem onClick={() => {}} label="login"/>
                        <MenuItem onClick={() => {}} label="sign up"/>
                    </>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserMenu