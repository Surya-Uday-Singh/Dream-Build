import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Daco_5643817.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{ gap: {sm: '122px', xs: '40px'}, mt: { sm:'32px', xs: '20px'}, justifyContent: 'none' }} px='20px'>
      <Link>
        <img src={Logo} alt="logo" style={{width: '48px', height : '48px', margin: '0 10px'}}></img>
      </Link>
      <Stack 
        direction= 'row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'>

        <Link to="/" className='button ' >Home</Link>
        <a href='/#exercises' className='button' >Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
