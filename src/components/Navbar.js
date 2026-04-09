import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/damage">Damage Types</Link> | 
      <Link to="/modifiers">Modifiers</Link>
    </nav>
  );
}

export default Navbar;