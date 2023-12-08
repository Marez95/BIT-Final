import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AdminPage from './pages/AdminPage'
import CandidatePage from './pages/CandidatePage'
import WizardPage from './pages/WizardPage'
import CandidateInfoPage from './pages/CandidateInfoPage'

const App = () => {

  const [candidates, setCandidates] = useState([]);

  function fetchDataCandidates() {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
        console.log(data);
      });
  }

  // function fetchImages() {
  //   fetch(`https://randomuser.me/api/?results=${candidates.length}`)
  //     .then(res => res.json())
  //     .then(data => setImages(data?.results))
  // }

  useEffect(() => {

    fetchDataCandidates()
    // fetchImages();

  }, [])










  return (
    <div>
      <BrowserRouter  >
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/candidates" element={<CandidatePage candidates={candidates} />} />
          <Route payh="/candidateInfo" element={<CandidateInfoPage />} />
          <Route path="/wizard" element={<WizardPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
