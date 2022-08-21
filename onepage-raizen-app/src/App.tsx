import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { OnePage } from './presentation/pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
