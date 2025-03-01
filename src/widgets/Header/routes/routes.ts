export enum NavRoutes {
    MAIN = '/',
    PRICES = '/prices',
    FEEDBACKS = '/#feedbacks',
    CONTACTS = '/#contacts',
    LESSONS = '/lessons',
    LESSONS_LEARN = '/lessons#learn',
    LESSONS_PROGRAMM = '/lessons#programm',
    LESSONS_CONTACTS = '/lessons#contacts',
}

export interface HeaderRoutes {
    name: string;
    path: string;
}

export const HeaderDevsRoutes: HeaderRoutes[] = [
    { name: 'Главная', path: NavRoutes.MAIN },
    { name: 'Курсы', path: NavRoutes.LESSONS },
    { name: 'Цены', path: NavRoutes.PRICES },
    { name: 'Отзывы', path: NavRoutes.FEEDBACKS },
    { name: 'Контакты', path: NavRoutes.CONTACTS },
];

export const HeaderLessonsRoutes: HeaderRoutes[] = [
    { name: 'Главная', path: NavRoutes.MAIN },
    { name: 'Чему мы научимся?', path: NavRoutes.LESSONS_LEARN },
    { name: 'Программа', path: NavRoutes.LESSONS_PROGRAMM },
    { name: 'Контакты', path: NavRoutes.LESSONS_CONTACTS },
];
