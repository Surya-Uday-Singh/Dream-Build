import React from 'react'
import {Stack, Typography} from '@mui/material';

import Icon from '../assets/icons/gym.png'


const BodyPart = ({item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop : bodyPart === item ? '9px solid #ff2625' : '',
        backgroundColor: "#fffff2", 
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap : '47px',
        borderBottomLeftRadius: '20px'
      }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({top:1800, left: 100, behaviour: 'smooth'})
      }}
      
      >
      <img src={Icon} alt='gym icon' style={{width:'40px', height: '40px'}}/>
      <Typography fontSize="24px" fontWeight='Bold' textTransform='capitalize'>{item}</Typography>

    </Stack>
  )
}

export default BodyPart
