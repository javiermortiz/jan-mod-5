import { Switch, Route, Redirect } from "react-router-dom";

//!!START SILENT
// Phase 1
// import { Deck, Store, Navbar, AppContextProvider } from "./phases/phase1";
// Phase 2 
// import { Deck, Store, Navbar, AppContextProvider } from "./phases/phase2";
// Phase 3 
// import { Deck, Store, Navbar, AppContextProvider } from "./phases/phase3";
// Phase 4 
// import { Deck, Store, Navbar, AppContextProvider } from "./phases/phase4";
// Bonus A
// import { Deck, Store, Navbar, AppContextProvider } from "./phases/bonusA";
// Bonus B
// import { Deck, Store, Navbar, AppContextProvider } from "./phases/bonusB";
//
// The import statements below load a complete solution through Bonus C. To run
// the code for earlier phases, comment out the following imports and uncomment
// the appropriate import above.
import AppContextProvider from "./context/AppContext";
//!!END
import Deck from "./components/Deck";
import Store from "./components/Store";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <h1 className="title is-1">Star Trek Trading Card Store!</h1>
      <p>
        Here you can buy and sell cards in order to build your ultimate deck!
      </p>
      {/*!!START SILENT */}
      <AppContextProvider>
      {/*!!END */}
        <Navbar />
        <Switch>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route path="/deck/:id">
            <Deck />
          </Route>
          <Route path="/">
            <Redirect to="/store" />
          </Route>
        </Switch>
      {/*!!START SILENT */}
      </AppContextProvider>
      {/*!!END */}
    </>
  );
};

export default App;
