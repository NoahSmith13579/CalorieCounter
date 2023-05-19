import NutritionFacts from "../Entities/NutritionFacts";
import DailyValues from "../Data/DailyValues.json";
import NutFactNumbers from "../Entities/NutFactNumbers";
import NutFactPercent from "../Entities/NutFactPercent";

function checkStorageForDupes(store: NutritionFacts[]) {
  let storeNameArr = store.map((item) => {
    return item.name;
  });
  let AreDupesStored = storeNameArr.some((name, index) => {
    return storeNameArr.indexOf(name) !== index;
  });

  if (AreDupesStored) {
    var acc: NutritionFacts[];

    store = [
      ...store
        .reduce((prev, cur) => {
          const key = cur.name;

          const item =
            prev.get(key) ||
            Object.assign({}, cur, {
              fat_total_g: 0,
              calories: 0,
              serving_size_g: 0,
              fat_saturated_g: 0,
              protein_g: 0,
              sodium_mg: 0,
              potassium_mg: 0,
              cholesterol_mg: 0,
              carbohydrates_total_g: 0,
              fiber_g: 0,
              sugar_g: 0,
            });

          item.fat_saturated_g += cur.fat_saturated_g;
          item.fat_total_g += cur.fat_total_g;
          item.calories += cur.calories;
          item.serving_size_g += cur.serving_size_g;
          item.protein_g += cur.protein_g;
          item.sodium_mg += cur.sodium_mg;
          item.potassium_mg += cur.potassium_mg;
          item.cholesterol_mg += cur.cholesterol_mg;
          item.carbohydrates_total_g += cur.carbohydrates_total_g;
          item.fiber_g += cur.fiber_g;
          item.sugar_g += cur.sugar_g;

          return prev.set(key, item);
        }, new Map())
        .values(),
    ];
    //console.log(store);
  }
  return store;
}

function sumNutValues(store: NutritionFacts[]): NutFactNumbers {
  let summation: NutFactNumbers = store
    .map(({ name, ...numbers }) => numbers as NutFactNumbers)
    .reduce((acc, cur) => {
      for (const prop in cur) {
        var proptype = prop as keyof NutFactNumbers;
        acc[proptype] +=
          Math.round((cur[proptype] + Number.EPSILON) * 100) / 100;
        acc[proptype] = +acc[proptype].toFixed(2);
      }
      return acc;
    });

  return summation;
}

function convertToNutProgress(store: NutritionFacts[]): NutFactPercent {
  let progressAmounts = {} as NutFactPercent;

  let sum = sumNutValues(store);
  for (const prop in sum) {
    if (prop !== "serving_size_g") {
      var proptype = prop as keyof NutFactPercent;
      progressAmounts[proptype] =
        (sum[prop as keyof NutFactNumbers] /
          DailyValues.dailyValues[proptype]) *
        100;
      progressAmounts[proptype] = +progressAmounts[proptype].toFixed(2);
    }
  }
  console.log("Progress Amounts: ", progressAmounts);
  return progressAmounts;
}

export { checkStorageForDupes, sumNutValues, convertToNutProgress };
