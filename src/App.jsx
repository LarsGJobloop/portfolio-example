import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import './App.css'

import { Layout } from "./routes/Layout"
import { LandingPage } from "./routes/LandingPage"
import { AboutPage } from "./routes/about/AboutPage"
import { ProjectsPage } from "./routes/projects/ProjectsPage"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />

          <Route path="projects" element={<ProjectsPage />} >

          </Route>

        </Route>

      </Routes>
    </Router>
  )
}

export default App
