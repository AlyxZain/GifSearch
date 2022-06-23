import { useState } from "react";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (NewCategory) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].toUpperCase() === NewCategory.toUpperCase()) return;
    }

    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} 
      />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }

    </>
  )
}
