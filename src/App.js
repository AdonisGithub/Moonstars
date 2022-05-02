import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Layout} from './page';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />} />
        </Routes>
      </Router>
  );
}
export default App;
