import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import bodybanner4 from '../assets/images/bodybanner4.png'


const Banner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: { sm: '50px'}
    }} position='relative' p='20px'>
        <Typography color='#b51b1b' fontWeight='600' fontSize='26px'>
            Dream Build
        </Typography>
        <Typography fontWeight='700' sx={{fontSize:{ lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>Hard Work, Commitment <br/> and Resilience</Typography>
        <Typography fontSize='22px' mb={4}>Check out exercises to build Your Dream Body</Typography>
        <Button variant='contained' color="secondary" href='#exercises' sx={{padding: '10px' }} 
       >Explore Exercises</Button>
        <img src={bodybanner4} alt='Banner' className='hero-banner-img'/>

    </Box>
  )
}

export default Banner
