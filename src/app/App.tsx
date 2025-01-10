import { Header } from "widgets/Header";
import "./styles/index.css";
import "./styles/reset.css";
import "./styles/app.css";
import { useTheme } from "./provider/ThemeProvider";
import { AppRouter } from "./router/ui/AppRouter";
import { Footer } from "widgets/Footer/Footer";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="grow">
        <AppRouter />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
