import React from "react";
import NutritionFacts from "../../Entities/NutritionFacts";
import { capitalizeFirstLetter } from "../../Util/Util";
import { displayedPropName } from "../../Constants/Constants";
import NutFactPercent from "../../Entities/NutFactPercent";
interface NutritionCardProps {
  nutritionFacts: NutritionFacts;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ nutritionFacts }) => {
  return (
    <div data-cy={nutritionFacts.name} className="w-fit">
      {Object.keys(nutritionFacts).map((prop) => {
        let propKeyOf = prop as keyof NutritionFacts;
        if (propKeyOf !== "name") {
          return (
            <div>
              <span className="">
                {displayedPropName[prop as keyof NutFactPercent]}:
              </span>
              <span data-cy={prop} className="font-bold">
                {" "}
                {nutritionFacts[propKeyOf]}
              </span>
            </div>
          );
        } else {
          return (
            <div>
              <span data-cy="name" className="font-bold underline">
                {capitalizeFirstLetter(nutritionFacts[propKeyOf])}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

export default NutritionCard;
