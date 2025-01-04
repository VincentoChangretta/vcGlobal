import { appImg, earthImg } from "shared/images";
import { TextSlider } from "shared/ui/TextSlider";

const x = ["Философия", "Arman"];

export const MainDevsPage = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-center minusHeaderHeight">
            <div className="mb-[25px]">
              <h1 className="relative w-[550px] flex text-8xl font-extrabold mb-[20px]">
                <span className="mr-[20px]">Мы -</span>
                  <TextSlider textArray={x} speed={2500} />
              </h1>
              <h3 className="text-2xl">Твой партнер и творец цифровых миров</h3>
            </div>
            <p className="max-w-[700px]">
              Наша команда разрабатывает высококачественные приложения,
              способствующие росту бизнеса, и предлагает образовательные
              программы, которые помогают молодым специалистам развивать навыки,
              необходимые для достижения успеха в индустрии.
            </p>
          </div>
          <div className="relative h-[500px] w-[500px]">
            <div className="max-w-[500px] absolute top-[-80px] left-[-120px] z-10">
              <img className="img" src={appImg} alt="" />
            </div>
            <div className="max-w-[500px] absolute top-[80px] z-[5]">
              <img className="img" src={earthImg} alt="" />
            </div>
            <div className="lightBall top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
