import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserHistory, createMemoryHistory,
  History, InitialEntry, MemoryHistory
} from 'history';
import App from './App';

type MountProps = {
  defaultHistory: History | MemoryHistory;
  initialPath?: InitialEntry;
  onNavigate?: () => void;
};

const mount = (el: HTMLElement, { defaultHistory, initialPath, onNavigate }: MountProps) => {
  const history = defaultHistory || createMemoryHistory({ initialEntries: [initialPath || '/'] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: (parentHistory: History) => {
      const { pathname } = history.location;
      if (pathname !== parentHistory.location.pathname) {
        history.push(parentHistory.location.pathname);
      }
    }
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_auth-dev-root');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
