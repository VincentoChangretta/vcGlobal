import { Header } from "widgets/Header";
import "./styles/index.css";
import "./styles/app.css";
import { useTheme } from "./provider/ThemeProvider";
import { Route, Routes } from "react-router-dom";
import { MainDevsPage } from "pages/MainDevsPage/MainDevsPage";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <main className="grow">
          <Routes>
            <Route path="/" element={<MainDevsPage />} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
