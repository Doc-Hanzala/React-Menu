import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import Title from "./components/Title";
import data from "./data";

const categoryItems = [
  "all",
  ...Array.from(new Set(data.map((item) => item.category))),
];

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(categoryItems);

  const displayItems = (category) => {
    if(category === "all"){
      setMenuItems(data)
      return
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems)
  };

  return (
    <main>
      <Title title="our menu" />
      <Categories categories={categories} displayItems={displayItems} />
      <Menu menuItems={menuItems} />
    </main>
  );
}

export default App;
