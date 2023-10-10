import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <ul className='flex flex-wrap'>
        <li className='px-4 ml-5'><Link target="_blank" href="https://github.com/Yooo31/"><BsGithub cursor="pointer" size={25}/></Link></li>
        <li className='px-4 ml-5'><Link target="_blank" href="https://www.linkedin.com/in/yoan-martins/"><BsLinkedin cursor="pointer" size={25}/></Link></li>
        <li className='px-4 ml-5'><Link target="_blank" href="mailto:mrts.yoan@gmail.com"><BsFillEnvelopeFill cursor="pointer" size={25}/></Link></li>
      </ul>
    </footer>
  )
}

export default Footer