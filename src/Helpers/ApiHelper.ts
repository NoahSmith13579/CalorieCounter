import NutritionFacts from "../Entities/NutritionFacts";

const API_URL = "http://localhost:3000";

interface ApiResponse<T> {
  content: T;
  success: boolean;
  message?: string;
}

interface RequestParams {
  method?: string;
  body?: string | any;
  headers?: Headers;
}
/**
 * Fetches from provided url and returns as JSON.
 * A fetch wrapper with error handling.
 *
 */
const doRequest = async <T>(url: string, params: RequestParams): Promise<T> => {
  if (typeof params.body !== "undefined" && typeof params.body !== "string") {
    params.body = JSON.stringify(params.body);
  }

  const response = await fetch(API_URL + url, params);

  if (response.status !== 200) {
    throw new Error(
      `Request failed with status ${response.status}: ${response.statusText}`
    );
  }

  return await response.json();
};

const getFood = async (query: string): Promise<NutritionFacts[]> => {
  const encodedQuery = encodeURIComponent(query);
  const resp = await doRequest<NutritionFacts[]>(`/api/${encodedQuery}`, {});
  //console.log(resp);
  return resp;
};

export { doRequest, getFood };
export type { ApiResponse, RequestParams };
