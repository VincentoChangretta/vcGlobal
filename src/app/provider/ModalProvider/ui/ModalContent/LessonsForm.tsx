import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'app/store/store';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { inputNames, placeholders } from 'shared/constants/constants';
import { lessonsTypes } from 'shared/data/data';
import Button from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import {
  ContactChoiseTypes,
  ContactChoiseVariations,
} from 'shared/ui/Input/config/config';
import { Input } from 'shared/ui/Input/ui/Input';

export const LessonsForm = () => {
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const [activeIcons, setActiveIcons] = useState<boolean>();
  const [contactMethod, setContactMethod] = useState<ContactChoiseTypes>(
    ContactChoiseVariations.TELEGRAM,
  );
  const actualCourseVariation = useSelector(
    (state: RootState) => state.lessonsVariation.course,
  );

  useEffect(() => {
    const activeIcons = () => {
      setActiveIcons(true);
    };
    document.addEventListener('hover', activeIcons);
    return () => document.removeEventListener('hover', activeIcons);
  }, []);

  return (
    <form className='relative'>
      <div>
        <h2 className='smallTitle mb-[30px]'>
          Запись на курс
          <div className='text-5xl mt-2'>Frontend/Start</div>
        </h2>
        <h3 className='mb-[20px]'>Заполните форму</h3>
      </div>
      <div className='flex gap-[30px]'>
        <div className='flex flex-col max-w-[400px] w-full gap-[10px] mb-[20px]'>
          <div className='flex items-center gap-[30px]'>
            <Dropdown
              activeValue={actualCourseVariation}
              listData={lessonsTypes}
              boxClassname='max-w-[230px] text-center'
            />
          </div>
          <Input
            name={inputNames.NAME}
            type='text'
            placeholder={placeholders.NAME}
          />
          <Input
            name={`${inputNames.CONTACT_WITH}-${contactMethod.name}`}
            type={contactMethod.inputType}
            placeholder={contactMethod.placeholder}
            setContactMethod={setContactMethod}
            withChoise={true}
          />

          <Button ref={ButtonRef} black={true}>
            Записаться!
          </Button>
        </div>
        <div className='flex flex-col text-[120px]'>
          <div
            className={`absolute top-[-10px] right-[65px] rotate-12 text-[130px] ${activeIcons ? 'text-htmlColor' : ''}`}
          >
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div
            className={`absolute top-[80px] right-[-70px] -rotate-12 ${activeIcons ? 'text-cssColor' : ''}`}
          >
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <div
            className={`absolute top-[175px] right-[60px] -rotate-6 ${activeIcons ? 'text-jsColor' : ''}`}
          >
            <FontAwesomeIcon icon={faJsSquare} />
          </div>
          <div
            className={`absolute top-[285px] right-[-60px] rotate-12 ${activeIcons ? 'text-gitColor' : ''}`}
          >
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
      </div>
    </form>
  );
};
