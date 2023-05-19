import React from "react";
import NutritionCard from "../NutritionCard/NutritionCard";
import NutritionFacts from "../../Entities/NutritionFacts";

interface FoodGridProps {
  meal: NutritionFacts[];
  onClick: (removedItemName: string) => void;
}

const FoodGrid: React.FC<FoodGridProps> = ({ meal, onClick }) => {
  const handleOnClick = (foodName: string) => {
    onClick(foodName);
  };

  return (
    <div>
      {meal.length >= 1 ? (
        meal.map((food) => (
          <>
            <NutritionCard key={food.name} nutritionFacts={food} />
            <button
              data-cy={`${food.name}Button`}
              onClick={() => handleOnClick(food.name)}
              className="border-2 rounded-xl bg-red-500 hover:bg-red-700 px-1"
            >
              Remove {food.name}?
            </button>
          </>
        ))
      ) : (
        <div data-cy="emptyGrid">
          <span>Empty</span>
        </div>
      )}
    </div>
  );
};

export default FoodGrid;
