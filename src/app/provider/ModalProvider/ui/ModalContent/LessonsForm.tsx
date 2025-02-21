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
import { handleSubmit } from 'shared/lib/FormSubmit/FormSubmit';
import { Button } from 'shared/ui/Button';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { HiddenInputs } from 'shared/ui/HiddenInputs/HiddenInputs';
import {
  ContactChoiseTypes,
  ContactChoiseVariations,
} from 'shared/ui/Input/config/config';
import { Input } from 'shared/ui/Input/ui/Input';
import { PrivacyCheck } from 'shared/ui/PrivacyCheck/PrivacyCheck';

export const LessonsForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitBtn, setSubmitBtn] = useState<boolean>(false);
  const ButtonRef = useRef<HTMLButtonElement>(null);
  const [iconsToBottom, setIconsToBottom] = useState<boolean>(false);
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
    const handleSetIconsToBottom = () => {
      if (window.innerWidth < 750) {
        setIconsToBottom(true);
      } else {
        setIconsToBottom(false);
      }
    };
    handleSetIconsToBottom();
    window.addEventListener('resize', handleSetIconsToBottom);
    return () => window.removeEventListener('resize', handleSetIconsToBottom);
  }, []);

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
      <form
        ref={formRef}
        onSubmit={(e) =>
          handleSubmit({
            e,
            formRef: formRef.current,
            setSubmitBtn,
          })
        }
        method='post'
        action=''
        className='relative '
      >
        <div>
          <h2 className='smallTitle mb-[30px]'>
            Запись на курс
            <div className='text-5xl mt-2 w-550:text-4xl'>Frontend/Start</div>
          </h2>
          <h3 className='mb-[20px]'>Заполните форму</h3>
        </div>
        <div className='flex gap-[30px] w-750:flex-col'>
          <div className='flex flex-col max-w-[400px] w-full gap-[10px] mb-[20px]'>
            <div className='flex items-center gap-[30px]'>
              <Dropdown
                activeValue={actualCourseVariation}
                listData={lessonsTypes}
                boxClassname='max-w-[230px] text-center'
                toDoFunction={changeLessonVariation}
              />
            </div>
            <HiddenInputs/>
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

            <Button type='submit' ref={ButtonRef} black={true}>
              Записаться!
            </Button>
            <PrivacyCheck className='!text-left' text='"Записаться!"' />
          </div>

          {!iconsToBottom ? (
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
          ) : (
            <div className='flex gap-[10px] justify-between text-[120px] w-550:text-[80px] w-450:text-[70px]'>
              <div
                className={`rotate-12 transition-colors ${activeIcons ? 'text-htmlColor' : ''}`}
              >
                <FontAwesomeIcon icon={faHtml5} />
              </div>
              <div
                className={`-rotate-12 transition-colors ${activeIcons ? 'text-cssColor' : ''}`}
              >
                <FontAwesomeIcon icon={faCss3} />
              </div>
              <div
                className={`-rotate-6 transition-colors ${activeIcons ? 'text-jsColor' : ''}`}
              >
                <FontAwesomeIcon icon={faJsSquare} />
              </div>
              <div
                className={`rotate-12 transition-colors ${activeIcons ? 'text-gitSecondColor' : ''}`}
              >
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};
