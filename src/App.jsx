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
import { ProjectPage } from "./routes/projects/:project-slug/AboutPage"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />} >
          <Route index element={<LandingPage />} />
          {/* path resolves to parent path + argument */}
          {/* ==> "/" + "about" = "/about" */}
          <Route path="about" element={<AboutPage />} />

          <Route path="projects" element={<ProjectsPage />} >
            {/* ==> "/" + "about" + "/projects" + "projectSlug"  */}
            <Route path=":projectSlug" element={<ProjectPage />} />
          </Route>

        </Route>

      </Routes>
    </Router>
  )
}

export default App
