import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { howWeWorkData } from "shared/data/data";
import "shared/ui/React-slick/react-slick.css"

export const MainDevsAboutWork = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
  return (
    <section className='mb-section'>
      <div className="container">
        <h2 className='bigTitle text-center'>Как мы работаем?</h2>
        <div>
        <Slider {...sliderSettings}>
            {howWeWorkData.map((step, index) => (
                <article key={step.id}>
                    <div className="mx-[20px]">
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
}
