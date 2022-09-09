import { Button } from "bootstrap"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Resume from "./Pics/Resume.pdf"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        Shane Wiles
      </Link>
      <ul>
        <CustomLink to="/about" >About</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <a class = {"link"} target={"_blank"} href={Resume}> Resume</a>
        <a class = {"link"} href="https://github.com/ShaneW-18" target={"_blank"}>GitHub</a>
        <a class = {"link"} href="https://linkedin.com/in/shane-wiles" target={"_blank"}>Linkedin</a>
      
       
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