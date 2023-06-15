import React, {useEffect, useState} from 'react'
import  Pagination  from '@mui/material/Pagination'
import {Box, Stack, Typography} from '@mui/material/'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesppage = 9;
  
  const indexofLastExercise = currentPage * exercisesppage;
  const indexofFirstExercise = indexofLastExercise - exercisesppage;

  const currExercises = exercises.slice(indexofFirstExercise, indexofLastExercise);
  console.log(exercises);
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top:1800, behavior: "smooth"})
  }
  useEffect(() => {
    const fetchExercisesData = async ()=> {
      let exercisesData = [];

      if (bodyPart === 'All') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);

      }
      setExercises(exercisesData);
    }

    fetchExercisesData();
  }, [bodyPart])
  return (
    <Box id="exercises"
      sx={{mt: {lg: '100px'}}}
        mt="50px"
        p="20px"
    >
      <Typography variant="h3" mb="46px" textAlign='center' >
        Results
      </Typography>
      <Stack direction='row' sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap='wrap' justifyContent='center'>
           {currExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise}/>          
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
            {exercises.length > 9 && (
              <Pagination color='standard' shape='rounded' count={Math.ceil(exercises.length/exercisesppage)} page={currentPage} onChange={paginate}/>
            )}
      </Stack>
    </Box>
  )
}

export default Exercises
