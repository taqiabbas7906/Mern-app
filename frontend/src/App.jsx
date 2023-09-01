import { BrowserRouter, Route , Routes } from "react-router-dom"
import Navbar from "./components/navbar/navbar"

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    </BrowserRouter>
  )
}