import animationData from '../../assets/lotties/coding.json';
import Lottie from 'react-lottie';
import { useMediaQuery } from '@mui/material';

export function LottieCoding()  {
  const matches = useMediaQuery('(min-width:500px)');
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
  <Lottie options={defaultOptions} width={matches? 220 : 150} height={matches? 220 : 150}/>
  </>
  )
}