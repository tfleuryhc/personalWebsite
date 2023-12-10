import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-blue-100 items-center justify-center flex font-bold shadow-md">
            <p className="text-orange-500">TF</p>
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar