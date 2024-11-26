import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import RecipeList from './components/ReceipeList';
import RecipeDetails from './components/ReceipeDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
