import logo from "../../assets/logo.png"
import "./navbar.css"
const Navbar = () => {
  return (
    <header className=" h-[60px] bg-accent-300 flex items-center justify-between font-primary">
        <div className="logo"><img className= " h-[60px]" src={logo} alt="fiTracc" /></div>
        <nav>
          <ul className="flex">
            <a href="#home">
              <li className="navlink">Home</li>
            </a>
            <a href="#exercises">
              <li className="navlink">Exercises</li>
            </a>
            <a href="#dailyQuote">
              <li className="navlink">Daily Quote</li>
            </a>
            <a href="#contact">
              <li className="navlink">Contact</li>
            </a>
          </ul>
        </nav>
        <div className="navbuttons">
          <a href="">Login</a>
          <button>Sign Up</button>
        </div>
    </header>
  )
}

export default Navbar