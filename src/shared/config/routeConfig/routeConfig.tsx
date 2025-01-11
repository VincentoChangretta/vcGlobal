import { LessonsPage } from "pages/LessonsPage";
import { MainDevsPage } from "pages/MainDevsPage";
import { PricePage } from "pages/PricePage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
  MAIN = "main",
  PRICES = "prices",
  // FEEDBACKS = "feedbacks",
  // CONTACTS = "contacts",
  LESSONS = "lessons",
  // LESSONS_LEARN = "learn",
  // LESSONS_PROGRAMM = "programm",
  // LESSONS_CONTACTS = "lessons_contacts",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.PRICES]: "/prices",
  // [AppRoutes.FEEDBACKS]: "/feedbacks",
  // [AppRoutes.CONTACTS]: "/",
  [AppRoutes.LESSONS]: "/lessons",
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
};
