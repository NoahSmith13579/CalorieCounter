import NutritionFacts from "../Entities/NutritionFacts";

interface ExternalApiResponse<T> {
  content: { items: T };
}

/**
 * Fetches data from api
 * @param query input food name and serving size information
 * @returns
 */
const getFood = async (query: string): Promise<NutritionFacts[]> => {
  const encodedQuery = encodeURIComponent(query);
  if (encodedQuery.length >= 1500) {
    return [] as NutritionFacts[];
  }
  const params: RequestInit = {
    mode: "cors",
    headers: {
      "X-API-KEY": process.env.REACT_APP_CALORIE_NINJA_API_KEY!,
      "Content-Type": "application/json",
    },
  };
  const uri = `https://api.calorieninjas.com/v1/nutrition?query=${encodedQuery}`;

  const resp = await fetch(uri, params);

  if (resp.status !== 200) {
    throw new Error(
      `Request failed with status ${resp.status}: ${resp.statusText}`
    );
  }
  const items = await resp.json();
  const payload: ExternalApiResponse<NutritionFacts[]> = { content: items };
  return payload.content.items;
};

export { getFood };
