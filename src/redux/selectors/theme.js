import { createSelector } from 'reselect';

export const getThemes = state => state.themes;
export const getActiveThemeId = state => state.activeThemeId;
export const getActiveTheme = createSelector(
  getThemes,
  getActiveThemeId,
  (themes, activeThemeId) => themes.find(theme => theme.id === activeThemeId),
);
