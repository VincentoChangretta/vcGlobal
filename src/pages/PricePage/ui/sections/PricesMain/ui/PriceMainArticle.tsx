import { ModalContext, useModal } from 'app/provider/ModalProvider';
import { FC, useContext } from 'react';
import { ServicePriceTypes } from 'shared/data/data';
import { Button } from 'shared/ui/Button';
interface PriceMainArticleProps {
  service: ServicePriceTypes;
}

export const PriceMainArticle: FC<PriceMainArticleProps> = ({ service }) => {
  const { openModal } = useModal();
  const { setModalData } = useContext(ModalContext);

  const setModal = (service: ServicePriceTypes) => {
    setModalData(service);
    openModal();
  };

  return (
    <>
      <article className='py-[20px] px-[40px] rounded-stdRadius bg-glassWhite'>
        <div className='flex justify-between items-end mb-[20px] gap-[30px] w-1000:flex-col w-1000:items-start'>
          <div>
            <h4 className='text-sliderNums font-extrabold leading-sliderNums mb-[30px] w-1000:text-3xl w-550:text-2xl w-450:text-xl'>
              {service.title}
            </h4>
            <p>{service.text}</p>
          </div>
          <div className='text-right w-1000:text-left'>
            <p className='text-sliderNums font-extrabold leading-sliderNums mb-[30px]'>
              {service.price}
            </p>
            <p className='whitespace-nowrap'>{service.time}</p>
          </div>
        </div>
        <div className='flex justify-between items-end gap-[20px] w-1450:flex-col w-1450:items-start'>
          <ul className='flex items-center gap-[20px] flex-wrap w-550:text-sm'>
            {service.checks.map((item, index) => (
              <li
                className='py-[10px] px-[20px] bg-glassWhite rounded-stdRadius'
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <Button onClick={() => setModal(service)}>Заказать</Button>
        </div>
      </article>
    </>
  );
};
