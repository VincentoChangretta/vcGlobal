import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useUrlChanger = () => {
    const { hash } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1)); // Убираем '#'
            if (element) {
                element.scrollIntoView();

                // Изменяем URL назад к исходному состоянию
                navigate(window.location.pathname, { replace: true });
            }
        }
    }, [hash, navigate]);
};
