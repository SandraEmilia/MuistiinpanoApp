import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="w-full">

            <div className="relative z-10 bg-stone-300 py-6 px-4" >
                <h1 className="text-3xl text-center text-stone-600 mb-4 font-serif">MuistiinpanoApp</h1>
                <nav className="text-center  ">
                    <Link className="px-4 hover:underline font-serif text-stone-600" to="/">Etusivu</Link>
                    <Link className="px-4 hover:underline font-serif text-stone-600" to="/courseInput">Lisää kurssi</Link>
                    <Link className="px-4 hover:underline font-serif text-stone-600" to="/lisääMuistiinpano">Lisää muistiinpanoja</Link>
                    <Link className="px-4 hover:underline font-serif text-stone-600" to="/mpNäkymä">Muistiinpanot</Link>
                </nav>
            </div>  
        </div>
    )
};

export default Header;