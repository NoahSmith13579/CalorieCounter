import React from "react";
import NutritionCard from "../NutritionCard/NutritionCard";
import NutritionFacts from "../../Entities/NutritionFacts";

interface FoodGridProps {
  meal: NutritionFacts[];
}

const FoodGrid: React.FC<FoodGridProps> = ({ meal }) => {
  return (
    <div>
      {meal.map((food) => (
        <>
          <NutritionCard nutritionFacts={food} />
          <button>Remove {food.name}?</button>
        </>
      ))}
    </div>
  );
};

export default FoodGrid;
