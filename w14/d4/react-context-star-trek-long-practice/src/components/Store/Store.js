//!!START SILENT
// To use Store from other phases, change the import statement in src/App.js

import { useAppContext } from "../../context/AppContext";
//!!END
import Card from "../Card";
//!!ADD
// import { initialCards, initialInventory } from "../../mockdata/CardData";
//!!END_ADD

const Store = () => {
  //!!START SILENT
  const { buyCard, inventory, cards } = useAppContext();
  //!!END
  //!!ADD
  // const buyCard = (cardId) => console.log(`Buy Card ${cardId} Coming Soon`);
  // const inventory = initialInventory;
  // const cards = initialCards;
  //!!END_ADD

  return (
    <div>
      <h2 className="title is-2">Store Inventory</h2>
      <div className="columns">
        {cards.map((card) => (
          <div key={card.id} className="column is-one-sixth">
            <button className="button" onClick={() => buyCard(card.id)}>
              <small>Buy ({inventory[card.id]} in stock)</small>
            </button>
            <Card imgUrl={card.imgUrl} content={card.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
