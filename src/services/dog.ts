import http from "./http";

interface IDogResponse {
  message: string;
  status: string;
}

/**
 * GET a random dog image
 *
 * @return { IDogResponse }
 */
export async function fetchRandomDog(): Promise<IDogResponse> {
  const { data } = await http.get("breeds/image/random");

  return data;
}
