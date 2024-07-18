import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import { Content } from "./components/layouts/Content";
import { ScreenSizeProvider } from "./contexts/ScreenSizeContext";

function App() {
  return (
    <BrowserRouter>
      <ScreenSizeProvider>
        <Content />
      </ScreenSizeProvider>
    </BrowserRouter>
  );
}

export default App;
