import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header>
        <h2>Header</h2>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  )
}