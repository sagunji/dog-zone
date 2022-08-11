import http from "./http";

interface IDogResponse {
  message: string;
  status: string;
}

/**
 * GET a random dog image
 *
 * @return { Array<IEmployeeData> }
 */
export async function fetchEmployees(): Promise<IDogResponse> {
  const { data } = await http.get("breeds/image/random");

  return data;
}
