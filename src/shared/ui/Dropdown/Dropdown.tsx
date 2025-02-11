import { FC, useRef, useState } from 'react';
import { useCloseModal } from 'shared/hooks/useCloseModal';

interface DropdownProps {
  activeValue: string | number;
  listData: string[] | number[];
  boxClassname?: string;
  toDoFunction?: (prev: string | number) => void;
}

export const Dropdown: FC<DropdownProps> = (props) => {
  const { listData, activeValue, boxClassname, toDoFunction } = props;
  const DropdownRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<boolean>();
  const [activeItem, setActiveItem] = useState<string | number>(activeValue);
  useCloseModal({ ref: DropdownRef, stateChanger: setActive });

  const handleSetActiveItem = (item: string | number) => {
    setActiveItem(item);
    setActive(false);
    toDoFunction ? toDoFunction(item) : null;
  };

  return (
    <div
      ref={DropdownRef}
      className={`relative z-[500] w-full cursor-pointer ${boxClassname}`}
    >
      <div
        className={`bg-mainBg text-mainBgInv py-[15px] px-[30px] ${!active ? 'rounded-stdRadius' : 'rounded-t-stdRadius'}`}
        onClick={() => setActive((prev) => !prev)}
      >
        {activeItem}
      </div>
      <ul
        className={`${!active ? 'hidden' : 'flex flex-col gap-[5px]'} absolute top-full left-0 right-0 p-[10px] px-[15px] pb-[15px] bg-mainBgLight text-mainBgInv rounded-b-stdRadius`}
      >
        {listData.map((item: string | number, index: number) => (
          <li
            className=' bg-mainBg py-[10px] px-[15px] rounded-[10px] transition-colors hover:bg-mainBgInv hover:text-mainBg'
            key={index}
            onClick={() => handleSetActiveItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
