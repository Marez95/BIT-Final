import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AdminPage from './pages/AdminPage'
import CandidatePage from './pages/CandidatePage'
import WizardPage from './pages/WizardPage'
import CandidateInfoPage from './pages/CandidateInfoPage'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null)

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
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/candidates" element={<CandidatePage setSelectedCandidate={setSelectedCandidate} candidates={candidates} />} />
          <Route path="/candidateInfo" element={<CandidateInfoPage data={selectedCandidate} />} />
          <Route path="/wizard" element={<WizardPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
