import React from "react";
import NutritionFacts from "../../Entities/NutritionFacts";
import { capitalizeFirstLetter } from "../../Util/Util";
import { displayedPropName } from "../../Constants/Constants";
import NutFactPercent from "../../Entities/NutFactPercent";
interface NutritionCardProps {
  nutritionFacts: NutritionFacts;
}

/**
 * Displays information about the food item
 * @param {NutritionFacts} nutritionFacts information about the food item
 * @returns
 */
const NutritionCard: React.FC<NutritionCardProps> = ({ nutritionFacts }) => {
  return (
    <article data-cy={nutritionFacts.name} className="w-fit">
      {
        // Map through each property and creates a div containing info for each
      }
      {Object.keys(nutritionFacts).map((prop) => {
        let propKeyOf = prop as keyof NutritionFacts;
        if (propKeyOf !== "name") {
          return (
            <section key={prop}>
              <span className="">
                {displayedPropName[prop as keyof NutFactPercent]}:
              </span>
              <span data-cy={prop} className="font-bold">
                {" "}
                {nutritionFacts[propKeyOf]}
              </span>
            </section>
          );
        } else {
          return (
            <section key={prop}>
              <span data-cy="name" className="font-bold underline">
                {capitalizeFirstLetter(nutritionFacts[propKeyOf])}
              </span>
            </section>
          );
        }
      })}
    </article>
  );
};

export default NutritionCard;
