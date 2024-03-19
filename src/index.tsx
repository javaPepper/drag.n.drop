import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from './components/error-boundary-fallback';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ErrorBoundary
      FallbackComponent={Fallback}
    >
      <App />
    </ErrorBoundary>

  </Provider>
);
