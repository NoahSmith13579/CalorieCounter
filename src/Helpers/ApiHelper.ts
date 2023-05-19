import NutritionFacts from "../Entities/NutritionFacts";

const API_URL = "http://localhost:3000";

interface ApiResponse<T> {
  content: {
    items: T;
  };
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
const doRequest = async <T>(
  url: string,
  params: RequestParams
): Promise<ApiResponse<T>> => {
  if (typeof params.body !== "undefined" && typeof params.body !== "string") {
    params.body = JSON.stringify(params.body);
  }

  const response = await fetch(API_URL + url, params);

  if (response.status !== 200) {
    throw new Error(
      `Request failed with status ${response.status}: ${response.statusText}`
    );
  }

  return (await response.json()) as ApiResponse<T>;
};

const getFood = async (query: string): Promise<NutritionFacts[]> => {
  const encodedQuery = encodeURIComponent(query);
  console.log("Encoded query string: ", encodedQuery);
  const resp = await doRequest<NutritionFacts[]>(`/api/${encodedQuery}`, {});
  console.log("response on query: ", resp.content.items);
  return resp.content.items;
};

export { doRequest, getFood };
export type { ApiResponse, RequestParams };
