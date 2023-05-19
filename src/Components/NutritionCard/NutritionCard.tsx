import React from "react";
import NutritionFacts from "../../Entities/NutritionFacts";
import { capitalizeFirstLetter } from "../../Util/Util";
import { displayedPropName } from "../../Constants/Constants";
interface NutritionCardProps {
  nutritionFacts: NutritionFacts;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ nutritionFacts }) => {
  return (
    <div data-cy={nutritionFacts.name}>
      <div>
        <span data-cy="name">{capitalizeFirstLetter(nutritionFacts.name)}</span>
      </div>
      <div>
        <span data-cy="ss">
          {displayedPropName.serving_size_g}: {nutritionFacts.serving_size_g}
        </span>
      </div>
      <div>
        <span data-cy="c">
          {displayedPropName.calories}: {nutritionFacts.calories}
        </span>
      </div>
      <div>
        <span data-cy="ft">
          {displayedPropName.fat_total_g}: {nutritionFacts.fat_total_g}
        </span>
      </div>
      <div>
        <span data-cy="fs">
          {displayedPropName.fat_saturated_g}: {nutritionFacts.fat_saturated_g}
        </span>
      </div>
      <div>
        <span data-cy="ch">
          {displayedPropName.cholesterol_mg}: {nutritionFacts.cholesterol_mg}
        </span>
      </div>
      <div>
        <span data-cy="s">
          {displayedPropName.sodium_mg}: {nutritionFacts.sodium_mg}
        </span>
      </div>
      <div>
        <span data-cy="ct">
          {displayedPropName.carbohydrates_total_g}:{" "}
          {nutritionFacts.carbohydrates_total_g}
        </span>
      </div>
      <div>
        <span data-cy="f">
          {displayedPropName.fiber_g}: {nutritionFacts.fiber_g}
        </span>
      </div>
      <div>
        <span data-cy="pr">
          {displayedPropName.protein_g}: {nutritionFacts.protein_g}
        </span>
      </div>
      <div>
        <span data-cy="p">
          {displayedPropName.potassium_mg}: {nutritionFacts.potassium_mg}
        </span>
      </div>
    </div>
  );
};

export default NutritionCard;
