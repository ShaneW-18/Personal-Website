import { Button } from "bootstrap"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Resume from "./Pics/Resume.pdf"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Shane Wiles
      </Link>
      <ul>
        <CustomLink to="/about" >About</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <Link target={"_blank"} to={Resume} className="resume"> Resume</Link>
       
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}