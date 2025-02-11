import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'app/store/store';
import { changeVariation } from 'features/lessons/lessonsSlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { inputNames, placeholders } from 'shared/constants/constants';
import { CourseVariations, lessonsTypes } from 'shared/data/data';
import { Button } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import {
  ContactChoiseTypes,
  ContactChoiseVariations,
} from 'shared/ui/Input/config/config';
import { Input } from 'shared/ui/Input/ui/Input';

export const LessonsForm = () => {
  const dispatch = useDispatch();
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const [activeIcons, setActiveIcons] = useState<boolean>(false);
  const [contactMethod, setContactMethod] = useState<ContactChoiseTypes>(
    ContactChoiseVariations.TELEGRAM,
  );
  const actualCourseVariation = useSelector(
    (state: RootState) => state.lessonsVariation.course,
  );
  const [hovering, setHovering] = useState<boolean>(false);

  const changeLessonVariation = (lessonType: CourseVariations) => {
    dispatch(changeVariation(lessonType));
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setHovering(true);
      setActiveIcons(true);
    };
    const handleMouseLeave = () => {
      setHovering(false);
      setActiveIcons(false);
    };
    if (ButtonRef.current) {
      ButtonRef.current.addEventListener('mouseenter', handleMouseEnter);
      ButtonRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (ButtonRef.current) {
        ButtonRef.current.removeEventListener('mouseenter', handleMouseEnter);
        ButtonRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [hovering]);

  return (
    <>
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
                toDoFunction={changeLessonVariation}
              />
            </div>
            <Input
              name={inputNames.LESSONS_VARIATION}
              type='text'
              boxClassName='hidden'
              inpClassName='hidden'
              value={actualCourseVariation}
              readOnly
            />
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
              className={`absolute top-[10px] right-[65px] rotate-12 text-[130px] transition-colors ${activeIcons ? 'text-htmlColor' : ''}`}
            >
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div
              className={`absolute top-[100px] right-[-70px] -rotate-12 transition-colors ${activeIcons ? 'text-cssColor' : ''}`}
            >
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div
              className={`absolute top-[195px] right-[60px] -rotate-6 transition-colors ${activeIcons ? 'text-jsColor' : ''}`}
            >
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div
              className={`absolute top-[305px] right-[-60px] rotate-12 transition-colors ${activeIcons ? 'text-gitSecondColor' : ''}`}
            >
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
