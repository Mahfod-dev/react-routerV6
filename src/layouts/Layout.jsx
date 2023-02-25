import { Outlet } from "react-router-dom"
import { Navbar,Footer } from "../components/ui"

export const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}