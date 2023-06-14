import animationData from '../../assets/lotties/programming-computer.json';
import Lottie from 'react-lottie';
import { useMediaQuery } from '@mui/material';

export function LottieCode()  {
  const matches = useMediaQuery('(min-width:960px)');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
  <>
  <Lottie options={defaultOptions} width={matches? 300 : 180} height={matches? 300 : 180}/>
  </>
  )
}