import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from '@/contexts';

import App from '@/App';
import store from '@/store/store';

import './index.scss';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Could not find root');
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <Provider store={store}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </Provider>
  </BrowserRouter>,
);
