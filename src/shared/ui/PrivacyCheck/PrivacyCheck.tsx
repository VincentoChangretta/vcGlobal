
import { Link } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

interface PrivacyCheckProps {
  className?: string;
  text?: string;
}

export const PrivacyCheck = (props: PrivacyCheckProps) => {
  const { className, text = '"Отправить"' } = props;
  return (
    <div className={`text-center text-balance text-sm ${className}`}>
      <p>Нажимая на кнопку {text} Вы соглашаетесь с</p>
      <Link className='link' target='_blank' to={AppRoutes.PRIVACY}>
        политикой обработки персональных данных.
      </Link>
    </div>
  );
};
