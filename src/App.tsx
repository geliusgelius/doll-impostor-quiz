import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home/Home";
import Game from "@pages/Game/Game";
import Leaders from "@pages/Leaders/Leaders";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaders" element={<Leaders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
