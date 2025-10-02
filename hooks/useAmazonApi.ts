import { useState, useCallback } from "react";

interface AmazonApiResponse {
  // We'll define this based on the actual response structure
  [key: string]: any;
}

interface AmazonApiError {
  message: string;
  status?: number;
  code?: string;
}

export const useAmazonApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AmazonApiError | null>(null);

  const searchCampaignsByBrands =
    useCallback(async (): Promise<AmazonApiResponse | null> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/amazon/campaigns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Amazon API Response:", data);
        return data;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError({
          message: errorMessage,
          status:
            err instanceof Error && "status" in err
              ? (err as any).status
              : undefined,
        });
        console.error("Amazon API Error:", err);
        return null;
      } finally {
        setLoading(false);
      }
    }, []);

  return {
    searchCampaignsByBrands,
    loading,
    error,
  };
};
