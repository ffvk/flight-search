// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// const API_BASE_URL = "http://209.105.242.30:7777";
// const API_BASE_URL = "http://127.0.0.1:8000";
const API_BASE_URL = "http://localhost:4000";

// this is using for json formate

if (!API_BASE_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_BASE_URL is not defined in the environment variables."
  );
}

const getAuthToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

export const apiClients = async <T = any,>(
  endpoint: string,
  method: string = "GET",
  data?: any,
  options: RequestInit = {}
): Promise<T> => {
  if (endpoint.includes("auth/?action=login")) {
    localStorage.clear();
  }
  //  debugger

  const token = getAuthToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    if (!response.ok) {
      // Parse error body as JSON
      const errorBody = await response.json();

      console.log("errorBody: ", errorBody);

      // Check if errorBody has a 'message' property
      if (
        typeof errorBody === "object" &&
        errorBody !== null &&
        "detail" in errorBody &&
        typeof errorBody.detail === "string"
      ) {
        throw new Error(errorBody.detail);
      }

      // Fallback if 'message' is not available
      throw new Error("Something went wrong");
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};
