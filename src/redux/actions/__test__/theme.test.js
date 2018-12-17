import themes from 'tests/fixtures/themes';
import {
  GET_THEMES,
  CHANGE_THEME,
  SET_THEMES,
  SET_ACTIVE_THEME,
  getThemes,
  changeTheme,
  setThemes,
  setActiveTheme,
} from '../theme';

describe('Theme Actions', () => {
  it('should generate action getThemes correctly', () => {
    const action = getThemes();

    expect(action.type).toEqual(GET_THEMES);
  });

  it('should generate action setTheme correctly', () => {
    const action = setThemes(themes);

    expect(action.type).toEqual(SET_THEMES);
    expect(action.payload).toEqual(themes);
  });

  it('should generate action changeTheme correctly', () => {
    const action = changeTheme('3024');

    expect(action.type).toEqual(CHANGE_THEME);
    expect(action.payload).toEqual({ themeId: '3024' });
  });

  it('should generate action setActiveTheme correctly', () => {
    const action = setActiveTheme();

    expect(action.type).toEqual(SET_ACTIVE_THEME);
  });
});
