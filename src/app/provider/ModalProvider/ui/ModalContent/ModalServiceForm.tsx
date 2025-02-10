import { useState } from 'react';
import { inputNames, placeholders } from 'shared/constants/constants';
import Button from 'shared/ui/Button';
import {
  ContactChoiseTypes,
  ContactChoiseVariations,
} from 'shared/ui/Input/config/config';
import { Input } from 'shared/ui/Input/ui/Input';

export const ModalServiceForm = () => {
  const [contactMethod, setContactMethod] = useState<ContactChoiseTypes>(
    ContactChoiseVariations.TELEGRAM,
  );

  return (
    <form>
      <div className='flex gap-[10px] items-start mb-[10px]'>
        <Input
          name={inputNames.NAME}
          type='text'
          placeholder={placeholders.NAME}
          boxClassName='max-w-[400px]'
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
      <Button black={true}>Заказать</Button>
    </form>
  );
};
