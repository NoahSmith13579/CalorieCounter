import React from "react";
import NutritionFacts from "../../Entities/NutritionFacts";

interface NutritionCardProps {
  nutritionFacts: NutritionFacts;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ nutritionFacts }) => {
  return (
    <div data-cy={nutritionFacts.name}>
      <div>
        <span data-cy="name">{nutritionFacts.name}</span>
      </div>
      <div>
        <span data-cy="ss">{nutritionFacts.serving_size_g}g</span>
        <input />
      </div>
      <div>
        <span data-cy="c">{nutritionFacts.calories}cal</span>
      </div>
      <div>
        <span data-cy="ft">{nutritionFacts.fat_total_g}g</span>
      </div>
      <div>
        <span data-cy="fs">{nutritionFacts.fat_saturated_g}g</span>
      </div>
      <div>
        <span data-cy="ch">{nutritionFacts.cholesterol_mg}mg</span>
      </div>
      <div>
        <span data-cy="s">{nutritionFacts.sodium_mg}mg</span>
      </div>
      <div>
        <span data-cy="ct">{nutritionFacts.carbohydrates_total_g}g</span>
      </div>
      <div>
        <span data-cy="f">{nutritionFacts.fiber_g}g</span>
      </div>
      <div>
        <span data-cy="pr">{nutritionFacts.protein_g}g</span>
      </div>
      <div>
        <span data-cy="p">{nutritionFacts.potassium_mg}mg</span>
      </div>
    </div>
  );
};

export default NutritionCard;
