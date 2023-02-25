import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
    <header>
        <nav>
    <ul>
        <li>
            <NavLink className={({isActive})=> isActive ? 'active' : '' } to='' end >Home</NavLink>
        </li>
        <li>
            <NavLink className={({isActive})=> isActive ? 'active' : '' } to='products' >Products</NavLink>
        </li>
    </ul>

        </nav>


    </header>
   
    </>
  )
}