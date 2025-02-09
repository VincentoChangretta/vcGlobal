import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { ModalProvider } from 'app/provider/ModalProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
