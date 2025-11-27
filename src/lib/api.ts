import { ApiResponse, VendorConfig } from "@/types/site";

const BACKEND_URL = "http://localhost:8080";

export async function getVendorConfig(slug: string): Promise<VendorConfig | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/public/vendor/check/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`Failed to fetch vendor config: ${res.status} ${res.statusText}`);
      return null;
    }

    const json: ApiResponse<VendorConfig> = await res.json();

    if (json.success) {
      return json.data;
    } else {
      console.error("API returned success: false", json);
      return null;
    }
  } catch (error) {
    console.error("Error fetching vendor config:", error);
    return null;
  }
}
