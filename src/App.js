import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//Main App Styles
import './App.css';

// Views
import HomeView from './views/homeView/HomeView';
import SkillsView from './views/skillsView/SkillsView';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/skills" element={<SkillsView />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
