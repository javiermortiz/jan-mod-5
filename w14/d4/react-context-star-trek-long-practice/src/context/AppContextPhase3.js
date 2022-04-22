// To use AppContext from other phases, change the import statement in
// src/App.js 

import React, { useState, useCallback, useEffect } from "react";
import {
  initialCards,
  initialDecks,
  initialInventory
} from "../mockdata/CardData";

export const AppContext = React.createContext({});

const AppContextProvider = ({children}) => {
  const [applicationState, updateApplicationState] = useState({
    decks: initialDecks,
    inventory: initialInventory
  });

  const buyCardForPlayer = useCallback(
    (cardId) => {
      if (applicationState.inventory[cardId] === 0) {
        console.log('NO INVENTORY!');  
        return;
      }
      console.log(`BUY CARD ${cardId} FOR PLAYER!`);

      // Make copy of the inventory to ensure the function does not
      // inadvertently update existing data that would cause rerenders.
      const newInventory = { ...applicationState.inventory };

      // Remove card from inventory
      newInventory[cardId]--;

      // Update inventory in a new instance of the application state object
      updateApplicationState({
        decks: applicationState.decks,
        inventory: newInventory
      });
    }, [applicationState]
  );

  // Useful for debugging inventory updates
  useEffect(() => {
    console.log("INVENTORY UPDATED", applicationState.inventory)
  }, [applicationState.inventory]);

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
