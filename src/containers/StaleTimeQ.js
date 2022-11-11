import { useQuery } from "react-query";
import { getAdvice } from "../services/advice";

export const StaleTimeQ = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "advice",
    queryFn: () => getAdvice().then((res) => res),
    staleTime: 10000,
    refetchOnWindowFocus: false,
  });

  // while in stale time range, it prevents req again
  //  console.log("isFetching", isFetching);

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{data?.data?.slip?.advice}</h1>
      <button onClick={() => refetch()}>refetch</button>
    </>
  );
};
