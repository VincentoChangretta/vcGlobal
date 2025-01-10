declare module 'react-slick' {
    import * as React from 'react';

    interface SlickProps {
        dots?: boolean;
        infinite?: boolean;
        speed?: number;
        slidesToShow?: number;
        slidesToScroll?: number;
        // Добавьте другие свойства по мере необходимости
    }

    export default class Slider extends React.Component<SlickProps> {}
}