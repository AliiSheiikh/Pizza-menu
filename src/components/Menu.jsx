import Pizza from "./Pizza";
import { pizzaData } from "/public/data.js";

export default function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>

        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all our stone oven, all organic, all delicious
        </p>

        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    </>
  );
}
