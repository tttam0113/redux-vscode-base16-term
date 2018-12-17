import differ from 'deep-diff';

const { log, group, groupCollapsed, groupEnd } = console;
const isCollapsed = true;

const tryCatch = (func, defaultMsg) => {
  try {
    func();
  } catch (e) {
    log(defaultMsg);
  }
};

const startGroup = label => {
  tryCatch(() => {
    const consoleGroup = isCollapsed ? groupCollapsed : group;
    consoleGroup(label);
  }, label);
};

const endGroup = label => {
  tryCatch(() => groupEnd(), label);
};

// https://github.com/flitbit/diff#differences
const dictionary = {
  E: {
    color: '#2196F3',
    text: 'CHANGED:',
  },
  N: {
    color: '#4CAF50',
    text: 'ADDED:',
  },
  D: {
    color: '#F44336',
    text: 'DELETED:',
  },
  A: {
    color: '#2196F3',
    text: 'ARRAY:',
  },
  CS: {
    color: '#9E9E9E',
    text: 'CURRENT STATE',
  },
  NS: {
    color: '#4CAF50',
    text: 'NEXT STATE',
  },
  AC: {
    color: '#03A9F4',
    text: 'ACTION:',
  },
};

const style = kind => `color: ${dictionary[kind].color}; font-weight: bold`;

const renderDiff = diff => {
  const { kind, path, lhs, rhs, index, item } = diff;

  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '→', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [`${path.join('.')}[${index}]`, item];
    default:
      return [];
  }
};

const logDiff = (prevState, newState) => {
  try {
    const diff = differ(prevState, newState);

    startGroup('Diff');

    if (diff) {
      diff.forEach(elem => {
        const { kind } = elem;
        const output = renderDiff(elem);

        log(`%c ${dictionary[kind].text}`, style(kind), ...output);
      });
    } else {
      log('—— no diff ——');
    }

    endGroup('—— diff end —— ');
  } catch (e) {
    log('-- log diff error --');
  }
};

export default ({ getState }) => next => action => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    startGroup(`${action.type}`);

    const currentState = getState();
    log(`%c ${dictionary.CS.text}`, style('CS'), currentState);

    log(`%c ${dictionary.AC.text}`, style('AC'), action);
    next(action);

    const nextState = getState();
    log(`%c ${dictionary.NS.text}`, style('NS'), nextState);

    logDiff(currentState, nextState);

    endGroup(`-- ${action.type} End --`);
  } else {
    next(action);
  }
};
