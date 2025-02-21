import { useState } from 'react';
import { inputNames, placeholders } from 'shared/constants/constants';
import {Button} from 'shared/ui/Button';
import {
  ContactChoiseTypes,
  ContactChoiseVariations,
} from 'shared/ui/Input/config/config';
import { Input } from 'shared/ui/Input/ui/Input';

export const ModalOrder = () => {
  const [contactMethod, setContactMethod] = useState<ContactChoiseTypes>(
    ContactChoiseVariations.TELEGRAM,
  );
  return (
    <div>
      <h3 className='text-3xl font-extrabold max-w-[400px] mb-[20px]'>
        Оставьте заявку на разработку сайта
      </h3>
      <div className='flex flex-col gap-[10px] '>
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
        <Button black={true}>Заказать</Button>
      </div>
    </div>
  );
};
