import { FC, useState } from 'react';
import { ContactChoiseTypes, ContactChoiseVariations } from '../config/config';

interface ContactChoiseProps {
  setContactMethod: (prev: ContactChoiseTypes) => void;
}

export const ContactChoise: FC<ContactChoiseProps> = (props) => {
  const { setContactMethod } = props;
  const [activeItem, setActiveItem] = useState<string>(
    ContactChoiseVariations.TELEGRAM.name,
  );
  const [activeList, setActiveList] = useState<boolean>(false);

  const openModal = () => {
    setActiveList((prev) => !prev);
  };

  const handleSetActiveItem = (item: ContactChoiseTypes) => {
    setActiveItem(item.name);
    setActiveList(false);
    setContactMethod(item);
  };
  return (
    <div className='absolute max-w-[130px] w-full top-2/4 left-3 -translate-y-2/4 text-base cursor-pointer'>
      <div
        className={`bg-mainBg text-mainBgInv py-[10px] px-[20px] text-center ${!activeList ? 'rounded-[20px]' : 'rounded-t-[20px]'}`}
        onClick={openModal}
      >
        {activeItem}
      </div>
      <ul
        className={`absolute top-full gap-1 left-0 right-0 ${!activeList ? 'hidden' : 'flex flex-col'} bg-mainBgLight text-mainBgInv pt-[5px] p-[10px] rounded-b-[20px] `}
      >
        {Object.values(ContactChoiseVariations).map(
          (value: ContactChoiseTypes) => {
            return (
              <li
                key={value.name}
                className='bg-mainBg py-2 px-4 rounded-[10px]'
                onClick={() => handleSetActiveItem(value)}
              >
                {value.name}
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
};
