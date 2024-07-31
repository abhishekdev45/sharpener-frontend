// src/App.js
import React from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';


function App() {
  return (
    <div>
      <Header />
      <main>
                <Meals />
      </main>
      {/* Other components go here */}
    </div>
  );
}

export default App;
