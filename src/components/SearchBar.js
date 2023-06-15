import React, {useState, useEffect} from 'react'
import { Box, Button, Typography, TextField, Stack } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchBar = ({setBodyPart, bodyPart, setExercises}) => {
  const [search, setSearch]  = useState('');
  const [bodyParts, setbodyParts] = useState([])

  useEffect(() => {
    const  fetchExercisesData  = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setbodyParts(['All', ...bodyPartsData])
    }

    fetchExercisesData();
  },[])
  const handleSearch = async () => {
    if(search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      
      const searchedExercises = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search)||  
      exercise.target.toLowerCase().includes(search)||
      exercise.equipment.toLowerCase().includes(search)||
      exercise.bodyPart.toLowerCase().includes(search));

      setSearch('');
      setExercises(searchedExercises);
      window.scrollTo({top:1800, left: 100, behaviour: 'smooth'})
    }
  }
  return (
   
    <Stack alignItems='center' mt='300px' justifyContent='center' p='20px'>
    <Typography fontWeight='700' sx={{fontSize:{lg:'44px', xs: '30px'}}} mb='50x' textAlign='center'>
      Some of our Recommended <br/> exercises
    </Typography>
    <Box mb='72px' position='relative'>
      <TextField sx={{
        input: {fontWeight: '700', border: 'none'},
        width: { lg: '800px', xs: '350px', xl:'1170px'},
        backgroundColor: '#fff',
        ml: '-100px'
      }}
      InputProps={{
        style: {
          borderRadius: "15px",
        }
      }}
      height='76px' value={search} onChange={(e)=>setSearch(e.target.value.toLowerCase())} placeholder='Search Exercises' type="text"
      />
      <Button className='search-btn' variant='contained' color='primary' sx={{ textTransform:'none', 
      width: { lg: '175px', xs: '80px'},
      fontSize: { lg: '20px', xs: '14px'},
      height: '56px',
      position: 'absolute',
      ml:'5px'
      }}
      onClick={handleSearch}>Search</Button>
    </Box>
    <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts></HorizontalScrollbar>
    </Box>
    </Stack>
    
  )
}

export default SearchBar
