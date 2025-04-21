import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1 className="text-red-600">MuistiinpanoApp</h1>
            <nav>
                <Link to="/">Etusivu</Link>
                <Link to="/courseInput">Lisää kurssi</Link>
                <Link to="/lisääMuistiinpano">Lisää muistiinpanoja</Link>
                <Link to="/mpNäkymä">Muistiinpanot</Link>
            </nav>
        </div>
    )
};

export default Header;