import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Layout} from './page';
import {PrivacyPolicy} from "./page/PrivacyPolicy";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy/>} />
        </Routes>
      </Router>
  );
}
export default App;
