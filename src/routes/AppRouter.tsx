import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChartDemoPage from "../pages/ChartDemoPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-publish/" element={<HomePage />} />
        <Route
          path="/react-publish/chartdemopage"
          element={<ChartDemoPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
