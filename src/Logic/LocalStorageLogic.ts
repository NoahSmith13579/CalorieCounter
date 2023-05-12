import NutritionFacts from "../Entities/NutritionFacts";

type NutFactNumbers = {
  calories: number;
  fat_total_g: number;
  fat_saturated_g: number;
  serving_size_g: number;
  protein_g: number;
  sodium_mg: number;
  potassium_mg: number;
  cholesterol_mg: number;
  carbohydrates_total_g: number;
  fiber_g: number;
  sugar_g: number;
};

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

function updateServingSize(
  store: NutritionFacts[],
  name: string,
  newValue: number
) {
  let changedStore = store.reduce(function (prev, cur) {
    if (cur.name === name) {
      prev = cur;
    }
    return prev;
  });
  const servingSizeMult = changedStore.serving_size_g / newValue;

  for (let prop in changedStore) {
    if (prop !== "name" && prop !== "serving_size_g") {
      changedStore[prop as keyof NutFactNumbers] =
        changedStore[prop as keyof NutFactNumbers] * servingSizeMult;
    } else if (prop === "serving_size_g") {
      changedStore[prop as keyof NutFactNumbers] = newValue;
    }
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

export { checkStorageForDupes, updateServingSize, sumNutValues };
