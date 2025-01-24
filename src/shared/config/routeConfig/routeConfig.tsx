import { LessonsPage } from 'pages/LessonsPage';
import { MainDevsPage } from 'pages/MainDevsPage';
import { MyCVPage } from 'pages/MyCVPage';
import { PricePage } from 'pages/PricePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    PRICES = 'prices',
    LESSONS = 'lessons',
    MyCV = 'CV',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PRICES]: '/prices',
    // [AppRoutes.FEEDBACKS]: "/feedbacks",
    // [AppRoutes.CONTACTS]: "/",
    [AppRoutes.LESSONS]: '/lessons',
    [AppRoutes.MyCV]: '/myCV',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainDevsPage />,
    },
    [AppRoutes.LESSONS]: {
        path: RoutePath.lessons,
        element: <LessonsPage />,
    },
    [AppRoutes.PRICES]: {
        path: RoutePath.prices,
        element: <PricePage />,
    },
    [AppRoutes.MyCV]: {
        path: RoutePath.CV,
        element: <MyCVPage />,
    },
};
