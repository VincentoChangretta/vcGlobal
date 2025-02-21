import { LessonsPage } from 'pages/LessonsPage';
import { MainDevsPage } from 'pages/MainDevsPage';
import { PricePage } from 'pages/PricePage';
import { PrivacyPage } from 'pages/PrivacyPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  PRICES = 'prices',
  LESSONS = 'lessons',
  PRIVACY = 'privacy',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PRICES]: '/prices',
  [AppRoutes.LESSONS]: '/lessons',
  [AppRoutes.PRIVACY]: '/privacy',
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
  [AppRoutes.PRIVACY]: {
    path: RoutePath.privacy,
    element: <PrivacyPage />,
  },
};
