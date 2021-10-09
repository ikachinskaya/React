import { useState, useEffect } from "react";

function useData(getData) {
  const [data, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getData()
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);
  return { data, isLoading, error };
}

export default useData;
