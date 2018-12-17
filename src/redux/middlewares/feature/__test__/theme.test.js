import mockMiddleware from 'tests/__mocks__/mockMiddleware';
import themes from '../data/theme.json';
import { GET_THEMES, CHANGE_THEME, setActiveTheme, setThemes } from 'redux/actions/theme';
import themeMiddleware from '../theme';

const create = mockMiddleware(themeMiddleware);
let next;
let invoke;

beforeEach(() => {
  const res = create();
  next = res.next;
  invoke = res.invoke;
});

it('Should pass through any action', () => {
  const action = { type: 'TEST' };

  invoke(action);

  expect(next).toHaveBeenCalledWith(action);
});

it('should handle action GET_THEMES', () => {
  const action = { type: GET_THEMES };

  invoke(action);

  const setThemesAction = setThemes(themes);
  expect(next).toHaveBeenCalledWith(setThemesAction);
});

it('should handle action CHANGE_THEME', () => {
  const action = { type: CHANGE_THEME, payload: { themeId: themes[1].id } };

  invoke(action);

  const setActiveThemeAction = setActiveTheme(themes[1].id);
  expect(next).toHaveBeenCalledWith(setActiveThemeAction);
});
