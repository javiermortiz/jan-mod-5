//!!START SILENT
// To use Navbar from other phases, change the import statement in src/App.js

//!!END
import { NavLink } from "react-router-dom";
//!!START SILENT
import { useAppContext } from "../../context/AppContext";
//!!END
//!!ADD
// import { initialDecks } from "../../mockdata/CardData";
//!!END_ADD

const Navbar = () => {
    //!!START SILENT
    const { decks } = useAppContext();
    //!!END
    //!!ADD
    // const decks = initialDecks;
    //!!END_ADD

    return (
        <div className="navbar">
            <div className="navbar-menu">
                <NavLink
                    to={`/store`}
                    activeClassName="is-selected"
                    className="navbar-item"
                >
                    Shop
                </NavLink>
                {decks.map((deck, i) => {
                    return (
                        <NavLink
                            to={`/deck/${i}`}
                            className="navbar-item"
                            activeClassName="is-selected"
                            key={i}
                        >
                            {deck.name}
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
}

export default Navbar;
