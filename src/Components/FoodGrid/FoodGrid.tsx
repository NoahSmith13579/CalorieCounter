import React from "react";
import NutritionCard from "../NutritionCard/NutritionCard";
import NutritionFacts from "../../Entities/NutritionFacts";

interface FoodGridProps {
  meal: NutritionFacts[];
  onClick: (removedItemName: string) => void;
}

/**
 * Grid that displays and contains NutritionCards
 * @param meal NutritionFacts array
 * @param onClick Layout's handleRemoveFood
 * @returns
 */
const FoodGrid: React.FC<FoodGridProps> = ({ meal, onClick }) => {
  /**
   * Passes the clicked food's name to the parent function
   * @param foodName Clicked food's name
   */
  const handleOnClick = (foodName: string) => {
    onClick(foodName);
  };

  return (
    // Use two different ternary to avoid incorrect styling on the "EmptyGrid"
    <>
      <div className="inline-grid  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {meal.length >= 1
          ? meal.map((food) => (
              <div
                className="border m-3 p-3 w-fit shadow-sm bg-gray-200"
                key={food.name}
              >
                <NutritionCard nutritionFacts={food} />
                <button
                  data-cy={`${food.name}Button`}
                  onClick={() => handleOnClick(food.name)}
                  className="border-2 rounded-xl bg-red-500 hover:bg-red-700 px-1 justify-end"
                >
                  Remove {food.name}?
                </button>
              </div>
            ))
          : ""}
      </div>
      {meal.length < 1 ? (
        <div data-cy="emptyGrid" className="p-6">
          <span className="p-3 text-white">
            You have not added any food to your meal yet. Enter something into
            the field above to start counting calories!
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FoodGrid;
