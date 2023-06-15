import React, {useState} from 'react'
import { Box } from '@mui/material'

import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'
import Exercises from '../components/Exercises'


const  Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('All');

  return (
    <Box>
      <Banner/>
      <SearchBar setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>
  )
}

export default Home
