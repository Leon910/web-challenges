import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "Apple",
      color: "green",
    },
    {
      id: 3,
      name: "Mango",
      color: "orange",
    },
    {
      id: 4,
      name: "Kiwi",
      color: "gold",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} farbe={fruit.color} />
      ))}
    </div>
  );
}
