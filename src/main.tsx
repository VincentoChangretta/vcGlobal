import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { ModalProvider } from 'app/provider/ModalProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import './app/styles/index.css';
import { Provider } from 'react-redux';
import store from 'app/store/store';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>,
);
