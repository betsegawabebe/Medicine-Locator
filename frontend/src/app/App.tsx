import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/layout/Header/header";

// import { useAllowedRole } from 'utils/hook/useAllowedRole';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} path={"/"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
