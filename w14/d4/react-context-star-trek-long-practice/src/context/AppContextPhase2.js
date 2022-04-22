// To use AppContext from other phases, change the import statement in
// src/App.js
 
import React, { useState, useCallback } from "react";
import {
  initialCards,
  initialDecks,
  initialInventory
} from "../mockdata/CardData";

export const AppContext = React.createContext({});

const AppContextProvider = ({children}) => {
  const [applicationState, updateApplicationState] = useState({
    decks: initialDecks,
    inventory: initialInventory,
  });

  const buyCardForPlayer = useCallback(
    (cardId) => {
      console.log(`BUY CARD ${cardId} FOR PLAYER!`);
      updateApplicationState(applicationState);
    }, [applicationState]
  );

  return (
      <AppContext.Provider value={{
        cards: initialCards,
        ...applicationState,
        buyCard: buyCardForPlayer
      }}>
        {children}
      </AppContext.Provider>
  );
}

export default AppContextProvider;
