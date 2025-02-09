import { Header } from 'widgets/Header';
import { useTheme } from './provider/ThemeProvider';
import { Footer } from 'widgets/Footer/Footer';
import { Modal, ModalContext, useModal } from './provider/ModalProvider';
import { useContext } from 'react';
import { AppRouter } from './router';
import './styles/index.css';
import './styles/reset.css';
import './styles/app.css';

function App() {
  const { theme } = useTheme();
  const { isOpen, closeModal } = useModal();
  const { modalData } = useContext(ModalContext);

  return (
    <>
      <div className={`app ${theme}`}>
        <Header />
        <main className='grow'>
          <AppRouter />
          {isOpen && (
            <Modal isOpen={isOpen} onClose={closeModal} modalData={modalData} />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
