// import './TextSlider.css'

import { FC, useEffect, useState } from "react";

interface TextSliderProps {
  textArray: string[];
  speed: number;
  className?: string;
}

export const TextSlider: FC<TextSliderProps> = (props) => {
  const { textArray, speed, className } = props;
  const [move, setMove] = useState<number>(-115);
  const textArrayLength = textArray.length * 115;

  useEffect(() => {
    let sliderInt: NodeJS.Timeout;
    const startSlider = () => {
      sliderInt = setInterval(() => {
        if (Math.abs(move) < textArrayLength) {
          setMove((prev) => prev - 115);
        } else {
          clearInterval(sliderInt);
          setMove(0);
        }
      }, speed);
    };

    if (move === 0) {
      const timer = setTimeout(() => {
        startSlider();
      }, 4000);

      return () => {
        clearTimeout(timer);
        clearInterval(sliderInt);
      };
    } else {
      startSlider();
    }

    return () => clearInterval(sliderInt);
  }, [move, textArrayLength, speed]); // Убедитесь, что textArrayLength добавлен в зависимости

  return (
    <div className={`${className} overflow-hidden`}>
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
