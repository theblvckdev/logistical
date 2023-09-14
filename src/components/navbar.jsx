import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import * as HiIcons from 'react-icons/hi2'
import * as GrIcons from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../data/navbarLinksData'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navbarBgChanged, setNavbarBgChanged] = useState(false);
  const changeNavbarBg = () => {
    if (window.scrollY >= 60) {
      setNavbarBgChanged(true);
    } else {
      setNavbarBgChanged(false);
    }
  }

  useEffect(() => {
    changeNavbarBg();
    window.addEventListener('scroll', changeNavbarBg);
  });
  return (
    <header className={navbarBgChanged ? "bg-white fixed top-0 left-0 w-[100vw] z-20 duration-500 shadow-md py-6" : "bg-transparent fixed top-0 left-0 w-[100vw] z-20 duration-500 py-6"}>
      <nav className="mx-full flex items-center justify-between px-[20px] lg:px-[50px]" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className={navbarBgChanged ? "-m-1.5 p-1.5 text-gray-900" : "-m-1.5 p-1.5 text-white"}>
            <h1 className='text-[24px] leading-[22px] font-[600] uppercase'>
              Logistica.
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={navbarBgChanged ? "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900" : "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <HiIcons.HiOutlineBars3BottomRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-10">
          {navbarLinks.map((links, index) => {
            const { name, linkPath } = links;
            return (
              <Link key={index} to={linkPath} className={navbarBgChanged ? 'no-underline px-[10px] duration-500  uppercase text-gray-900 text-[.9rem] font-[500]' : 'no-underline px-[10px] duration-500  uppercase text-white text-[.9rem] font-[500]'}>
                {name}
              </Link>
            )
          })}
        </Popover.Group>
        {/* <div className='ml-[50px]'>
          <button className={navbarBgChanged ? 'outline-none text-gray-900 text-[1.2rem]' : 'outline-none text-white text-[1.2rem]'}>
            <BsIcons.BsSearch />
          </button>
        </div> */}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0" />
        <Dialog.Panel className="fixed inset-y-0 z-[50] right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 text-gray-900">
              <h1 className='text-[24px] leading-[22px] font-[600] uppercase'>
                Logistica.
              </h1>
            </Link>
            <button
              type="button"
              className={navbarBgChanged ? "-m-2.5 rounded-md p-2.5 text-gray-900" : "-m-2.5 rounded-md p-2.5 text-white"}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <GrIcons.GrClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-[50px] flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navbarLinks.map((links, index) => {
                  const { name, linkPath } = links;
                  return (
                    <Link key={index} to={linkPath} className='-mx-3 block rounded-lg px-3 border-gray-200 border-b rounded-[0] py-4 text-[20px] font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Navbar