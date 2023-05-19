import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import NutritionFacts from "../../Entities/NutritionFacts";
import {
  sumNutValues,
  convertToNutProgress,
} from "../../Logic/LocalStorageLogic";
import NutFactPercent from "../../Entities/NutFactPercent";
import {
  colorArray,
  displayedPropName,
  nutritionOrder,
} from "../../Constants/Constants";
import NutFactNumbers from "../../Entities/NutFactNumbers";
//TODO beautify

interface CalorieCounterBoxProps {
  meal: NutritionFacts[];
}

const CalorieCounterBox: React.FC<CalorieCounterBoxProps> = ({ meal }) => {
  let nutritionPercent = {} as NutFactPercent;
  let mealTotals = {} as NutFactNumbers;
  // Prevents mutation of the values stored
  let nutOrderCopy = { ...nutritionOrder };

  if (meal.length > 0) {
    nutritionPercent = convertToNutProgress(meal);
    mealTotals = sumNutValues(meal);
  }
  nutritionPercent = Object.assign(nutOrderCopy, nutritionPercent);
  console.log("Percent array: ", nutritionPercent);
  return (
    <div>
      <div>
        <span>Serving Size(g): {mealTotals.serving_size_g ?? 0}</span>
      </div>
      {Object.keys(nutritionPercent).map((prop) => {
        let propKeyOf = prop as keyof NutFactPercent;
        console.log(
          "NutritionPercent prop value: ",
          nutritionPercent[propKeyOf]
        );
        return (
          <>
            <span>
              {displayedPropName[propKeyOf]}: {mealTotals[propKeyOf] ?? 0}
            </span>
            <ProgressBar
              color={colorArray[propKeyOf]}
              progress={nutritionPercent[propKeyOf] ?? 0}
            />
          </>
        );
      })}
    </div>
  );
};

export default CalorieCounterBox;
