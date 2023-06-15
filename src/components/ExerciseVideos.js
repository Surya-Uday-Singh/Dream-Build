import React from 'react'
import { Box, Stack, Typography, capitalize } from '@mui/material'
import { Padding } from '@mui/icons-material'

const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box sx={{marginTop: {lg: '200px', xs: '20px' }}} p="20px" >
        <Typography variant='h3' mb='33px'>
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> exercise videos
        </Typography>
        <Stack justifyContent="flex-start" flexWrap='wrap' alignItems='center'
        sx={{
            flexDirection: {lg: 'row'},
            gap: { lg: '110px', xs: '0'}
        }}>
            {exerciseVideos?.slice(0,3).map((item, index) => (
                <Box sx={{backgroundColor: '#Fff', p:'1px', padding:'10px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', transform: 'translateY(-2px)'}}  >
                <a
                    key={index}
                    className='exercise-video'
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}gym`}
                    target='_blank'
                    rel='noreferrer'
                >
                
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{borderRadius:'20px'}}/>
                    <Box>
                        <Typography variant='h5' color='#000' fontWeight={700} textTransform='capitalize'>
                            {item.video.title}
                        </Typography>
                        <Typography variant='h6' color='#000' fontWeight={300}>
                            {item.video.channelName}
                        </Typography>
                    </Box>

                </a>                
                </Box>
            ))};
        </Stack>
    </Box>
  )
}

export default ExerciseVideos
