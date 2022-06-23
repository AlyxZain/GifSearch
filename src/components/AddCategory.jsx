import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const oninputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    const newCategory = inputValue.trim();

    event.preventDefault();
    if (newCategory.length <= 0) return;
    setInputValue("");

    onNewCategory(newCategory);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={oninputChange}
      />
    </form>
  );
};
