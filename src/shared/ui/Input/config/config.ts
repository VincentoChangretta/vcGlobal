export interface ContactChoiseTypes {
  name: string;
  placeholder: string;
  inputType: string;
}

export interface ContactChoiseVariationsTypes {
  TELEGRAM: ContactChoiseTypes;
  EMAIL: ContactChoiseTypes;
  NUMBER: ContactChoiseTypes;
}

export const ContactChoiseVariations: ContactChoiseVariationsTypes = {
  TELEGRAM: { name: 'Telegram', placeholder: '@vcDevs', inputType: 'text' },
  EMAIL: { name: 'E-mail', placeholder: 'vcdevs@mail.ru', inputType: 'email' },
  NUMBER: {
    name: 'Телефон',
    placeholder: '+7 (999) 999 99 99',
    inputType: 'number',
  },
};
