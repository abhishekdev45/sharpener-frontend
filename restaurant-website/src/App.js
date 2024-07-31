// src/App.js
import React from 'react';
import Header from './components/Layout/Header';
import MealsSummary from './components/Meals/MealsSummary';


function App() {
  return (
    <div>
      <Header />
      <MealsSummary></MealsSummary>
      {/* Other components go here */}
    </div>
  );
}

export default App;
