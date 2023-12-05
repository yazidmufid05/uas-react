import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import QuranList from "./components/QuranList"
import SurahDetail from './utils/networks/SuratDetail';
import './App.css';
import Doa from './pages/Doa';
import DoaDetail from './utils/networks/DoaDetail';
import Waktu from './pages/Waktu';
import AsmaUlhusna from './pages/AsmaUlHusna';
import About from './pages/About';
import Navbar from './components/Navbar';

const App = () => {
  // State untuk menyimpan status tema (light atau dark)
  const [darkMode, setDarkMode] = useState(false);

  // Menyimpan preferensi tema di localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  // Fungsi untuk mengganti tema
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  // Menentukan kelas CSS berdasarkan status tema
  const appClass = darkMode ? 'app dark-mode' : 'app';


  return (
    <div className={appClass}>
      {/* Toggle button untuk mengganti tema */}
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <Routes>
  <Route path="/" element={<QuranList />} />
  <Route path="/surah/:surahNumber" element={<SurahDetail />} />
  <Route path="/doa" element={<Doa />} />
  <Route path="/detail" element={<DoaDetail />} />
  <Route path="/waktu" element={<Waktu />} />
  <Route path="/asmaulhusna" element={<AsmaUlhusna />} />
  <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
};

export default App;