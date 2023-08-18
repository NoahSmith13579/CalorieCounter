import React, { useState } from "react";
import { getFood } from "../../Helpers/ApiHelper";
import NutritionFacts from "../../Entities/NutritionFacts";

interface SearchBoxProps {
  onClick: (newFood: NutritionFacts[]) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onClick }) => {
  const [inputValue, setInputValue] = useState("");
  /**
   * Passes the input food item to the parent component's function
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  const handleOnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const inputFoodData = await getFood(inputValue);
    onClick(inputFoodData);
    setInputValue("");
  };
  /**
   * Changes the input value
   * @param e React.ChangeEvent<HTMLInputElement>
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="m-1">
      <form>
        <input
          data-cy="searchBoxInput"
          spellCheck="true"
          aria-label="Add food to meal"
          name="searchBox"
          value={inputValue}
          onChange={handleChange}
          className="border-2 rounded-xl px-1"
        />
        <button
          data-cy="searchBoxButton"
          onClick={(e) => {
            handleOnClick(e);
          }}
          className="border-2 rounded-xl bg-blue-500 hover:bg-blue-300 px-1"
          disabled={inputValue !== "" ? false : true}
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBox;
