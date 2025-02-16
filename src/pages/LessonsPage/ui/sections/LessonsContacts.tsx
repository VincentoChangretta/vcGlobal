import {
  faTelegram,
  faVk,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { contactsIcons } from 'shared/constants/constants';

export const LessonsContact = () => {
  return (
    <section className='mb-section' id='contacts'>
      <div className='container'>
        <h2 className='title'>Контакты</h2>
        <div className='flex justify-center gap-[50px] text-[80px] w-750:text-[60px]'>
          {contactsIcons.map((contact) => (
            <a key={contact.name} href={contact.path} target='_blank'>
              <FontAwesomeIcon icon={contact.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
