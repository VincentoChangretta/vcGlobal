import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToId = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [hash]);
};
