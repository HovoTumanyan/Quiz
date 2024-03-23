import loadingSound from '../.././assets/sounds/loading.mp3'
import sss from '../../assets/sounds/winer.mp3'
import Lottie from 'react-lottie';
import AnimationData from '../../assets/Animation - 1711143244476.json';
import { useEffect } from 'react';

export default function LoadingAnimation({playSound,animated}) {

    return(
        <div className="centered-container">
        <div className="animationLoading">
           <Lottie options={{ animationData: AnimationData }} />
        </div>
      </div>
    )
}