import { Link, Outlet } from "react-router-dom";

export function ProjectsPage() {
  return (
    <>
      <header>
        <h2>Projects list</h2>

        <nav>
          <ul>
            <li>
              <Link to="unit-converter">Unit Converter</Link>
            </li>          
          </ul>
        </nav>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  )
}