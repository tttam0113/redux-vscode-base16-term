import ThemeView from 'views/ThemeView';
// import requireAuth from '../hoc/requireAuth';

const indexRoutes = [
  {
    name: 'ThemeView',
    path: '/:themeId',
    component: ThemeView,
    exact: true,
  },
];

export default indexRoutes;
