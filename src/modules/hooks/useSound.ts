
import soundEnter from '../../assets/sound/click1.wav'
import over from '../../assets/sound/over.wav'
import { useState } from "react";

export function useSound() {
    const [audioButton] = useState(new Audio(soundEnter));
    const [audioInput] = useState(new Audio(over));
    
    const playSoundButton = () => audioButton.play();
    const playSoundInput = () => audioInput.play();
    
    return {
        playSoundButton,
        playSoundInput
    }
}