import { Header } from 'widgets/Header';
import './styles/index.css';
import './styles/reset.css';
import './styles/app.css';
import { useTheme } from './provider/ThemeProvider';
import { AppRouter } from './router/ui/AppRouter';
import { Footer } from 'widgets/Footer/Footer';
import { Modal, ModalContext, useModal } from './provider/ModalProvider';
import { useContext, useState } from 'react';
import AnimatedCursor from 'features/AnimatedCursor/AnimatedCursor';

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
                        <Modal
                            isOpen={isOpen}
                            onClose={closeModal}
                            modalData={modalData}
                        />
                    )}
                </main>
                <Footer />
                {/* <AnimatedCursor /> */}
            </div>
        </>
    );
}

export default App;
