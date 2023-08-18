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

interface CalorieCounterBoxProps {
  meal: NutritionFacts[];
}

/**
 * Displays the totals for the nutrition data and their percentage of daily value
 * @param meal NutritionFacts array
 * @returns
 */
const CalorieCounterBox: React.FC<CalorieCounterBoxProps> = ({ meal }) => {
  // initialize variables
  let nutritionPercent = {} as NutFactPercent;
  let mealTotals = {} as NutFactNumbers;
  // Prevents mutation of the values stored
  let nutOrderCopy = { ...nutritionOrder };

  // conditionally set the constants
  if (meal.length > 0) {
    nutritionPercent = convertToNutProgress(meal);
    mealTotals = sumNutValues(meal);
  }
  // alters the order of properties for ease of display
  nutritionPercent = Object.assign(nutOrderCopy, nutritionPercent);
  return (
    <article className="p-4 m-2 bg-gray-200 border rounded-xl shadow-lg">
      <section>
        <span className="font-bold">Daily Values</span>
        <hr className="border-black border-t-2" />
      </section>
      <section className="py-1">
        <span className="underline">Serving Size(g)</span>
        <span className="font-bold">: {mealTotals.serving_size_g ?? 0}</span>
      </section>
      {
        // Map through each property and create a progress bar for each
      }
      {Object.keys(nutritionPercent).map((prop) => {
        let propKeyOf = prop as keyof NutFactPercent;
        return (
          <section key={prop}>
            <span className="underline">{displayedPropName[propKeyOf]}:</span>
            <span className="font-bold"> {mealTotals[propKeyOf] ?? 0}</span>
            <div className="py-1">
              <ProgressBar
                color={colorArray[propKeyOf]}
                progress={nutritionPercent[propKeyOf] ?? 0}
              />
            </div>
          </section>
        );
      })}
    </article>
  );
};

export default CalorieCounterBox;
