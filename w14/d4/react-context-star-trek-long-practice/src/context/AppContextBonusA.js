// To use AppContext from other phases, change the import statement in
// src/App.js 

import React, { useState, useCallback, useEffect, useContext } from "react";
import {
  initialCards,
  initialDecks,
  initialInventory
} from "../mockdata/CardData";

const AppContext = React.createContext({});
export const useAppContext = () => useContext(AppContext); 

const AppContextProvider = ({children}) => {
  const cards = initialCards;
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

      // Make copies of both the player's deck and the inventory to ensure the
      // function does not inadvertently update existing data that would cause
      // rerenders.
      // Store reference to player's deck, knowing that player is always first.
      const newInventory = { ...applicationState.inventory };
      const newDecks = [ ...applicationState.decks ];
      const playerDeck = newDecks[0];

      // Remove card from inventory
      newInventory[cardId]--;

      // Add card to player deck
      const cardToAdd = cards.find(card => card.id === cardId);
      playerDeck.cards = [...playerDeck.cards, cardToAdd];

      // Update inventory and decks in a new instance of the application state
      // object
      updateApplicationState({
        decks: newDecks,
        inventory: newInventory
      });
    }, [applicationState, cards]
  );

  // Useful for debugging inventory updates
  useEffect(() => {
    console.log("INVENTORY UPDATED", applicationState.inventory)
  }, [applicationState.inventory]);

  // Useful for debugging deck updates
  useEffect(() => {
    console.log("DECK UPDATED", applicationState.decks)
  }, [applicationState.decks]);

  return (
      <AppContext.Provider value={{
        cards,
        ...applicationState,
        buyCard: buyCardForPlayer
      }}>
        {children}
      </AppContext.Provider>
  );
}

export default AppContextProvider;
