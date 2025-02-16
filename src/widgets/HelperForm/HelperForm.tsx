import { useRef, useState } from 'react';
import { handleSubmit } from 'shared/lib/FormSubmit/FormSubmit';
import { Button } from 'shared/ui/Button';
import { HiddenInputs } from 'shared/ui/HiddenInputs/HiddenInputs';
import { Input } from 'shared/ui/Input/ui/Input';

export const HelperForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitBtn, setSubmitBtn] = useState(false);

  return (
    <section className='text-center mb-section'>
      <div className='container'>
        <div className='help-to-choise__inner'>
          <div className=''>
            <h2 className='bigTitle'>Мы готовы помочь с выбором!</h2>
            <p className='text-big mb-[20px] w-750:max-w-[400px] w-750:mx-auto'>
              Наши эксперты подберут самое эффективное решение
            </p>
            <form
              ref={formRef}
              onSubmit={(e) =>
                handleSubmit({
                  e,
                  formRef: formRef.current,
                  setSubmitBtn,
                })
              }
              className='help-to-choise__form'
              method='post'
              action=''
            >
              <HiddenInputs />
              <Input
                name='number'
                type='number'
                placeholder='Номер телефона'
                boxClassName='mx-auto mb-[50px] !rounded-[60px] max-w-[550px] w-750:max-w-[350px] w-750:gap-[10px] w-750:p-[9px] '
                inpClassName='text-xl w-750:text-base w-750:pl-[20px] w-420:text-sm'
              >
                <Button
                  inputButton={true}
                  black={true}
                  className='mx-auto w-750:text-base w-750:max-w-[150px] w-420:text-sm w-420:max-w-[130px]'
                  type='submit'
                >
                  Отправить
                </Button>
              </Input>
            </form>
            {/* <Privacy /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
