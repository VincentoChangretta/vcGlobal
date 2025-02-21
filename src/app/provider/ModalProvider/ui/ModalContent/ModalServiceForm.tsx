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

export const ModalServiceForm = () => {
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
      <div className='flex gap-[10px] items-start mb-[10px] w-1000:flex-col'>
        <HiddenInputs />
        <Input
          name={inputNames.NAME}
          type='text'
          placeholder={placeholders.NAME}
          boxClassName='max-w-[400px] w-1000:w-full'
        />
        <Input
          withChoise={true}
          name={`${inputNames.CONTACT_WITH}-${contactMethod.name}`}
          type={contactMethod.inputType}
          placeholder={contactMethod.placeholder}
          setContactMethod={setContactMethod}
          boxClassName='max-w-[400px]'
        />
      </div>
      <Button type='submit' className='mb-[20px]' black={true}>
        Заказать
      </Button>
      <PrivacyCheck className='!text-left' text='"Заказать"' />
    </form>
  );
};
