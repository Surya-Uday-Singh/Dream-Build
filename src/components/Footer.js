import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Daco_5643817.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="10px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="100px" height="80px" />
        <Typography variant='h5'>Dream Build</Typography>
        
      </Stack>
    </Box>
  )
}

export default Footer
