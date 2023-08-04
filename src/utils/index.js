import { Pages } from "../pages";

export const PUBLIC_ROUTES = [
  {id: 1, path: "/", element: <Pages.Main/>},
];

export const NAVLIST = [
  {id: 1, icon: '/icons/main.svg', path: '/'},
  {id: 2, icon: '/icons/schedule.svg', path: '/schedule/'},
  {id: 3, icon: '/icons/plus.svg', path: '/add_new/'},
  {id: 4, icon: '/icons/doctors.svg', path: '/doctors/'}
]