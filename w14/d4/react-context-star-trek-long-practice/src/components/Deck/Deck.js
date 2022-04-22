//!!START SILENT
// To use Deck from other phases, change the import statement in src/App.js

//!!END
import { useParams } from 'react-router-dom'
//!!START SILENT
import { useAppContext } from "../../context/AppContext";
//!!END
//!!ADD
// import { initialDecks } from "../../mockdata/CardData";
//!!END_ADD
import Card from "../Card";

const Deck = () => {
  const { id } = useParams();
  //!!START SILENT
  const { decks, returnCard } = useAppContext();
  //!!END
  //!!ADD
  // const decks = initialDecks;
  //!!END_ADD

  const deck = decks[id];

  return (
    <div>
      <h2>{deck.name}</h2>
      {/*!!START SILENT */}
      {getRows(deck.cards, parseInt(id), returnCard)}
      {/*!!END */}
      {/*!!ADD */}
      {/* {getRows(deck.cards)} */}
      {/*!!END_ADD */}
    </div>
  );
};

// Helper function(s)

//!!START SILENT
const getRows = (cards, ownerId, returnCard) => {
//!!END
//!!ADD
// const getRows = (cards) => {
//!!END_ADD
  const numCols = 6;
  const numRows = Math.ceil(cards.length/numCols)

  // Pad the card list so it's an exact multiple of the number of columns
  const myCards = [...cards];
  for (let i=0; i<cards.length % numCols; i++) {
    myCards.push(null);
  }

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    // Pull out just the cards for this row
    const nextRow = myCards.slice(i * numCols, (i+1) * numCols)
    rows.push(
      <div key={i} className="columns">
        {nextRow.map((card, index) => (
          <div key={index} className="column is-one-sixth">
            {card && (
              //!!START SILENT 
              <>
                {/* Only include Return button if deck is the player's deck */}
                {ownerId === 0 && (
                    <button className="button" onClick={() => returnCard(index)}>
                        <small>Return Card to Store</small>
                    </button>
                )}
              {/*!!END */}
                <Card
                  imgUrl={card.imgUrl}
                  content={card.content}
                />
              {/*!!START SILENT */}
              </>
              //!!END
            )}
          </div>
        ))}
      </div>
    );
  }
  return rows;
};

export default Deck;
