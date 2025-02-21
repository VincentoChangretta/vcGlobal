import { useRef, useState } from 'react';
import { inputNames, placeholders } from 'shared/constants/constants';
import { handleSubmit } from 'shared/lib/FormSubmit/FormSubmit';
import { Button } from 'shared/ui/Button';
import { HiddenInputs } from 'shared/ui/HiddenInputs/HiddenInputs';
import {
  ContactChoiseTypes,
  ContactChoiseVariations,
} from 'shared/ui/Input/config/config';
import { Input } from 'shared/ui/Input/ui/Input';
import { PrivacyCheck } from 'shared/ui/PrivacyCheck/PrivacyCheck';

export const ModalOrder = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitBtn, setSubmitBtn] = useState<boolean>(false);
  const [contactMethod, setContactMethod] = useState<ContactChoiseTypes>(
    ContactChoiseVariations.TELEGRAM,
  );
  return (
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
    >
      <h3 className='text-3xl font-extrabold max-w-[400px] mb-[20px]'>
        Оставьте заявку на разработку сайта
      </h3>
      <div className='flex flex-col gap-[10px] '>
        <HiddenInputs />
        <Input
          name={inputNames.NAME}
          type='text'
          placeholder={placeholders.NAME}
          boxClassName='!max-w-[410px]'
        />
        <Input
          name={`${inputNames.CONTACT_WITH}-${contactMethod.name}`}
          type={contactMethod.inputType}
          placeholder={contactMethod.placeholder}
          withChoise={true}
          setContactMethod={setContactMethod}
          boxClassName='!max-w-[410px]'
        />
        <Button type='submit' black={true}>
          Заказать
        </Button>
      </div>
      <PrivacyCheck />
    </form>
  );
};
