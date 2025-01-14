import { createRoot } from 'react-dom/client';
import './app/styles/index.css';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/provider/ThemeProvider';
import { ModalProvider } from 'app/provider/ModalProvider';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </ThemeProvider>
    </BrowserRouter>,
);
