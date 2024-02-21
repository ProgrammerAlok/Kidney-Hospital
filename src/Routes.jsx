import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/home/Home";
import Career from "pages/career/Career";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
