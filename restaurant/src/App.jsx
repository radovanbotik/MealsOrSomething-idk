import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/Layout/SharedLayout";
import { Home } from "./components/Layout/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
