import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'


const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, target, name, equipment} = exerciseDetail;

    const extraDetail = [ 
    {
        icon: BodyPartImage,
        name: bodyPart,
    },
    {
        icon: TargetImage,
        name: target,
    },
    {
        icon: EquipmentImage,
        name: equipment,
    }];
  return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center', mt:'50px'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' style={{borderRadius:'50px'}}/>
        <Stack sx={{gap: { lg: '35px', xs: '20px'}}}>
            <Typography variant='h3' fontWeight={700} textTransform={'capitalize'}>
                {name}
            </Typography>
            <Typography variant='h6' fontWeight={300}>
            {name} {' '} targets your {target}. It helps develop and strengthen those muscles taking you closer to your goals. Have fun and keep yourself Hydrated. 
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction='row' alignItems='center' gap='24px'>
                    <Button sx={ {backgroundColor: '#fff3db', borderRadius: '50%', width:'100px', height: '100px'}}>
                        <img src={item.icon} style={{width:'50px', height: '50px'}} alt={item.name}/>
                    </Button>
                    <Typography variant='h5' textTransform='capitalize'>
                        {item.name}
                    </Typography>    
                </Stack>
            ) )}

        </Stack>
    </Stack>
  )
}

export default Detail
