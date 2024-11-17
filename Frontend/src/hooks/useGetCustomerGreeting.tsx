import { useEffect, useState } from "react";
import axios from "axios";

// a mix of customers with free gifts and varying amount of cats
const RANDOM_CUSTOMER_EXAMPLE_IDS = [
  "618f4ed6-1c5b-4993-a149-f64700bf31dd",
  "a1e03f8c-bb54-4b08-8f04-e0f84ba2c4c3",
  "7962ec16-acb9-4045-a4c7-4bd79093e969",
  "26c5a59d-d6dc-4085-a3ed-c970ce1866c4",
  "78185e79-2a59-47f6-9430-8c97bfbc8768",
] as const;

interface CustomerInfo {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}

// base url defined in vite.config
const useExportCustomerGreeting = () => {
  const [error, setError] = useState<boolean>(false); // in reality --> backend likely to return defined error object
  const [data, setData] = useState<CustomerInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const randomIndex = Math.floor(
    Math.random() * RANDOM_CUSTOMER_EXAMPLE_IDS.length,
  );
  const exampleId = RANDOM_CUSTOMER_EXAMPLE_IDS[randomIndex];

  useEffect(() => {
    const fetchCustomerInfo = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await axios.get(
          `/comms/your-next-delivery/${exampleId}`,
        );
        setLoading(false);
        setError(false);
        setData(data);
      } catch (err) {
        console.log("err@", err);
        setLoading(false);
        setError(true);
        setData(null);
      }
    };

    fetchCustomerInfo();
  }, []);

  return {
    error,
    data,
    loading,
  };
};

export default useExportCustomerGreeting;
