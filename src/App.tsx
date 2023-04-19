import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AvatarPage } from './pages/Avatar';
import { ButtonPage } from './pages/Button';
import { FormPage } from './pages/FormPage';
import { Home } from './pages/Home';
import { InputPage } from './pages/InputPage';
import { SelectPage } from './pages/SelectPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/avatar" element={<AvatarPage />} />
      </Routes>
    </div>
  );
}

export default App;
