import ThemeMode from '@/app/components/ThemeMode';
import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='hidden lg:block md:block'>
      <ul className='flex flex-wrap'>
        <li className='px-4 ml-5'>
          <ThemeMode />
        </li>
        <li className='px-4 ml-5'><Link target="_blank" href="https://github.com/Yooo31/"><BsGithub className="transition-transform hover:scale-125" cursor="pointer" size={25} /></Link></li>
        <li className='px-4 ml-5'><Link target="_blank" href="https://www.linkedin.com/in/yoan-martins/"><BsLinkedin className="transition-transform hover:scale-125" cursor="pointer" size={25} /></Link></li>
        <li className='px-4 ml-5'><Link target="_blank" href="mailto:mrts.yoan@gmail.com"><BsFillEnvelopeFill className="transition-transform hover:scale-125" cursor="pointer" size={25} /></Link></li>
      </ul>
    </footer>
  )
}

export default Footer