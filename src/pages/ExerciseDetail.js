import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import Detail from '../components/Detail';
import SimilarExercises from '../components/SimilarExercises';
import ExerciseVideos from '../components/ExerciseVideos';

const ExerciseDetail = () => {
  const [exerciseDetail, setExercisesDetail] = useState({});
  const { id } = useParams();

  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchEcercisesData = async () => {
      const exerciseAPIurl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchAPI = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseAPIurl}/exercises/exercise/${id}`, exerciseOptions);
      setExercisesDetail(exerciseDetailData); 
      
      
      const exerciseVideoDetail = await fetchData(`${youtubeSearchAPI}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideoDetail.contents);

      const targetMuscleExercises = await fetchData(`${exerciseAPIurl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercises);

      const similarEquipmentExercises = await fetchData(`${exerciseAPIurl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setSimilarEquipmentExercises(similarEquipmentExercises);
     }

    

    fetchEcercisesData();
  }, [id])
  return (
    <Box>
    <Detail exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercises={targetMuscleExercises} similarEquipmentExercises={similarEquipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail
