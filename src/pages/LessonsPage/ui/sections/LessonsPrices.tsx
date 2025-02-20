import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalContext, useModal } from 'app/provider/ModalProvider';
import { useContext } from 'react';
import { modalDataVariations } from 'shared/constants/constants';
import { lessonsPricesData } from 'shared/data/data';
import { Button } from 'shared/ui/Button';

export const LessonsPrices = () => {
  const { openModal } = useModal();
  const { setModalData } = useContext(ModalContext);

  const setModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalData(modalDataVariations.LESSONS_FORM);
    openModal();
  };

  return (
    <section className='mb-section'>
      <div className='lessons-container'>
        <div className='flex justify-center gap-[50px] w-1200:flex-col w-1200:max-w-[550px] w-1200:mx-auto'>
          {lessonsPricesData.map((service) => (
            <article
              key={service.id}
              className='bg-mainBgInv text-mainBg p-[30px] rounded-stdRadius'
            >
              <div>
                <h2 className='max-w-[300px] text-5xl font-extrabold mb-[30px] w-750:text-4xl'>
                  <div>{service.lessonsQuantity}</div>
                  {service.name}
                </h2>
                <div className='mb-[30px]'>
                  <h3 className='smallTitle mb-[10px]'>Изучим:</h3>
                  <ul className='flex items-center gap-[10px] w-750:flex-wrap'>
                    {service.technology.map((tech, index) => (
                      <li
                        key={index}
                        className='p-[10px] px-[20px] bg-mainBg text-mainBgInv rounded-stdRadius'
                      >
                        <FontAwesomeIcon
                          className='mr-[5px]'
                          icon={tech.icon}
                        />
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mb-[30px]'>
                  <h3 className='smallTitle mb-[10px]'>Разработаем:</h3>
                  <ul className='flex flex-col gap-[10px]'>
                    {service.development.map((dev, index) => (
                      <li
                        key={dev.slice(0, 5) + index}
                        className='w-660:text-base'
                      >
                        {dev}
                      </li>
                    ))}
                    {service.skills.map((skill, index) => (
                      <li
                        key={skill.slice(0, 5) + index}
                        className='w-660:text-base'
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='mb-[30px]'>
                  <p className='smallTitle mb-[10px]'>Цена:</p>
                  <p className='text-3xl font-extrabold'>
                    {service.priceR} || {service.priceUSD}
                  </p>
                </div>
                <Button black={true} onClick={setModal}>
                  Записаться
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
