// import './TextSlider.css'

import { FC, useEffect, useState } from "react";

interface TextSliderProps {
  textArray: string[];
  speed: number;
}

export const TextSlider: FC<TextSliderProps> = (props) => {
  const {textArray, speed} = props;

  const [activeText, setActiveText] = useState(textArray[0])

  useEffect(()=>{

  },[textArray, speed])

  return (
  <>
    {activeText}
  </>
);
};
