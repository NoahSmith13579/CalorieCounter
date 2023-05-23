let nutritionOrder = {
  calories: 0,
  fat_total_g: 0,
  fat_saturated_g: 0,
  cholesterol_mg: 0,
  sodium_mg: 0,
  carbohydrates_total_g: 0,
  fiber_g: 0,
  sugar_g: 0,
  potassium_mg: 0,
};

const displayedPropName = {
  calories: "Calories",
  serving_size_g: "Serving Size (g)",
  fat_total_g: "Total Fat (g)",
  fat_saturated_g: "Saturated Fat (g)",
  protein_g: "Protein (g)",
  sodium_mg: "Sodium (mg)",
  potassium_mg: "Potassium (mg)",
  cholesterol_mg: "Cholestorol (mg)",
  carbohydrates_total_g: "Total Carbohydrates (g)",
  fiber_g: "Fiber (g)",
  sugar_g: "Sugar (g)",
};

const colorArray = {
  calories: "red",
  serving_size_g: "",
  fat_total_g: "yellow",
  fat_saturated_g: "goldenrod",
  protein_g: "indianred",
  sodium_mg: "lightsteelblue",
  potassium_mg: "purple",
  cholesterol_mg: "khaki",
  carbohydrates_total_g: "lightslategrey",
  fiber_g: "oldlace",
  sugar_g: "snow",
};

export { nutritionOrder, displayedPropName, colorArray };
