import { SET_THEMES, SET_ACTIVE_THEME } from '../actions/theme';

const initialState = {
  themes: [],
  activeThemeId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_THEMES:
      return {
        ...state,
        themes: action.payload,
      };
    case SET_ACTIVE_THEME:
      return {
        ...state,
        activeThemeId: action.payload.themeId,
      };
    default:
      return state;
  }
};
