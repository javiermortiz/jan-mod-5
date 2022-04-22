//!!START SILENT
import { useCoffee } from '../context/CoffeeContext.js';

//!!END
const SelectedCoffeeBean = () => {
  //!!START SILENT
  const { coffeeBean } = useCoffee();

  return (
    <div className="selected-coffee">
      <h2>{coffeeBean.name}</h2>
    </div>
  );
  //!!END
  //!!ADD
  // return null;
  //!!END_ADD
}

export default SelectedCoffeeBean;
