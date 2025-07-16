import Pizza from "./Pizza";
import { pizzaData } from "/public/data.js";

export default function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>

        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </main>
    </>
  );
}
