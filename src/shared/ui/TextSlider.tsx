// import './TextSlider.css'

import { FC, useEffect, useState } from "react";

interface TextSliderProps {
  textArray: string[];
  speed: number;
}

export const TextSlider: FC<TextSliderProps> = (props) => {
  const { textArray, speed } = props;

  const [activeText, setActiveText] = useState(textArray[0]);
  const [move, setMove] = useState(-115);
  const textArrayLength = textArray.length * 115;

  useEffect(() => {
    const sliderInt = setInterval(() => {
      if (Math.abs(move - 115) <= textArrayLength) {
        setMove((prev) => prev - 115);
      } else {
        setMove(0);
      }
    }, speed);
    return () => clearInterval(sliderInt);
  }, [move, textArray, speed]);

  return (
    <div className="absolute top-0 left-[270px] h-[115px] overflow-hidden">
      <ul
        style={{ translate: `0 ${move}px` }}
        className="transition-all duration-[1000ms] flex flex-col gap-[20px]"
      >
        <li>vcDevs</li>
        {textArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
