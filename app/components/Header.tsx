import React from 'react'

const Header = () => {
  return (
    <header>
      <ul className='flex flex-wrap nav ml-5'>
        <li className='transition-transform hover:scale-125 hover:border-none px-4 pb-2 active'>Accueil</li>
        <li className='transition-transform hover:scale-125 hover:border-none px-4 pb-2'>Formation</li>
        <li className='transition-transform hover:scale-125 hover:border-none px-4 pb-2'>Projets</li>
        <li className='transition-transform hover:scale-125 hover:border-none px-4 pb-2'>Contact</li>
      </ul>
    </header>
  )
}

export default Header
