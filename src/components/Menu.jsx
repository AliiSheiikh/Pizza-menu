import Pizza from "./Pizza";

export default function Menu() {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="/pizzas/spinaci.jpg"
          price="10"
        />

        <Pizza
          name="Pizza Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          photoName="/pizzas/focaccia.jpg"
          price="6"
        />
      </main>
    </>
  );
}
