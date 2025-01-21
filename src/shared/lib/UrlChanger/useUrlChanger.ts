import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


interface UseUrlChangerResults {
    hash: string;
    navigate: (to: string, options?: { replace?: boolean; state?: any }) => void; 
}

export const useUrlChanger = (): UseUrlChangerResults => {
    const { hash } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1)); // Убираем '#'
            if (element) {
                element.scrollIntoView();
                // Изменяем URL без хэша
                navigate('/lessons'); // Убираем хэш из URL
            }
        }
    }, [hash, navigate]);

    return { hash, navigate };
};
