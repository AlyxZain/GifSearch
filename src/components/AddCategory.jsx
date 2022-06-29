import { useState } from "react";
import { PropTypes } from "prop-types";

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
    <form onSubmit = {onSubmit} aria-label = "form">
      <input
        type='text'
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={oninputChange}
      />
      <button type='submit'>Buscar</button>
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}