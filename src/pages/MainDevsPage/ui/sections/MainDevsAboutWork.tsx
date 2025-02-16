import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { howWeWorkData } from 'shared/data/data';
import 'shared/ui/React-slick/react-slick.css';
import { useEffect, useState } from 'react';

export const MainDevsAboutWork = () => {
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  });

  useEffect(() => {
    const setSlides = () => {
      if (window.innerWidth < 1100) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 1,
        }));
      } else if (window.innerWidth < 1200) {
        setSliderSettings((prevSettings) => ({
          ...prevSettings,
          slidesToShow: 2,
        }));
      }
    };
    setSlides();
    window.addEventListener('resize', setSlides);
    return () => window.removeEventListener('resize', setSlides);
  }, []);

  return (
    <section className='mb-section'>
      <div className='container'>
        <h2 className='bigTitle text-center mb-[100px]'>Как мы работаем?</h2>
        <div className='w-1100:text-xl'>
          <Slider {...sliderSettings}>
            {howWeWorkData.map((step, index) => (
              <article key={step.id}>
                <div className='mx-[20px]'>
                  0{index + 1}
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
