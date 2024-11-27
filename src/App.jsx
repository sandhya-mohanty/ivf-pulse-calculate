import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputScreen from './components/InputScreen';
import ResultScreen from './components/ResultScreen';

const App = () => {
  const [successRate, setSuccessRate] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route
            path="/"
            element={<InputScreen setSuccessRate={setSuccessRate} />}
          />
          <Route
            path="/result"
            element={<ResultScreen successRate={successRate} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
