import { CHANGE_THEME, GET_THEMES, setActiveTheme, setThemes } from 'redux/actions/theme';
import themes from './data/theme.json';

export default () => next => action => {
  next(action);

  switch (action.type) {
    case GET_THEMES: {
      next([setThemes(themes), setActiveTheme(themes[0].id)]);
      break;
    }
    case CHANGE_THEME: {
      const { themeId } = action.payload;
      next(setActiveTheme(themeId));
      break;
    }
    default:
      break;
  }
};
