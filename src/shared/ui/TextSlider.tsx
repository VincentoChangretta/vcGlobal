import { FC, useEffect, useRef, useState } from 'react';

export const sliderGap = 20;

interface TextSliderProps {
  textArray: string[];
  speed: number;
  className?: string;
}

export const TextSlider: FC<TextSliderProps> = (props) => {
  const sliderItemRef = useRef<HTMLLIElement | null>(null);
  const { textArray, speed, className } = props;
  const [move, setMove] = useState<number>(0);
  const [itemHeight, setItemHeight] = useState<number>(0);

  useEffect(() => {
    const changeItemHeight = () => {
      if (sliderItemRef.current) {
        const newHeight = sliderItemRef.current.offsetHeight + sliderGap;
        setItemHeight(newHeight);
        // Пересчитываем move в зависимости от новой высоты
        setMove((prev) => (prev / itemHeight) * newHeight);
      }
    };

    window.addEventListener('resize', changeItemHeight);
    return () => window.removeEventListener('resize', changeItemHeight);
  }, [itemHeight]);

  useEffect(() => {
    if (sliderItemRef.current) {
      const newHeight = sliderItemRef.current.offsetHeight + sliderGap;
      setItemHeight(newHeight);
    }
  }, [sliderItemRef]);

  const textArrayLength = textArray.length * itemHeight;

  useEffect(() => {
    let sliderInt: NodeJS.Timeout;
    const startSlider = () => {
      sliderInt = setInterval(() => {
        if (Math.abs(move) < textArrayLength) {
          setMove((prev) => prev - itemHeight);
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
  }, [move, textArrayLength, speed, itemHeight]);

  return (
    <div
      className={`${className} overflow-hidden`}
      style={{ height: `${itemHeight}px` }}
    >
      <ul
        style={{ transform: `translateY(${move}px)` }}
        className={`transition-all duration-[1000ms] flex flex-col gap-[${sliderGap}px]`}
      >
        <li ref={sliderItemRef} className='text-orangeMain'>
          vcDevs
        </li>
        {textArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
