import React from "react";
import { getFood } from "../../Helpers/ApiHelper";
import { checkStorageForDupes } from "../../Logic/LocalStorageLogic";

const SearchBox: React.FC = () => {
  return (
    <div>
      <form>
        <input data-cy="searchBoxInput" aria-label="Add food to meal" />
        <input
          type="submit"
          value="Add to Meal"
          data-cy="searchBoxButton"
          onSubmit={(e) => {
            e.preventDefault();
            getFood(e.currentTarget.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchBox;
