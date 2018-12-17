export const FEATURE = '[Theme]';
// Command actions
export const GET_THEMES = `${FEATURE} GET_THEMES`;
export const CHANGE_THEME = `${FEATURE} CHANGE_THEME`;

// Document actions
export const SET_THEMES = `${FEATURE} SET_THEMES`;
export const SET_ACTIVE_THEME = `${FEATURE} SET_ACTIVE_THEME`;

export const getThemes = () => ({
  type: GET_THEMES,
  payload: {},
  meta: {
    feature: FEATURE,
  },
});

export const setThemes = themes => ({
  type: SET_THEMES,
  payload: themes,
  meta: {
    feature: FEATURE,
  },
});

export const changeTheme = themeId => ({
  type: CHANGE_THEME,
  payload: { themeId },
  meta: {
    feature: FEATURE,
  },
});

export const setActiveTheme = themeId => ({
  type: SET_ACTIVE_THEME,
  payload: { themeId },
  meta: {
    feature: FEATURE,
  },
});
