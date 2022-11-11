import { useQuery } from "react-query";
import { getUsersWithPage } from "../services/reqres";

export const CachedQ = () => {
  const { data, isLoading, isError, isFetching, refetch } = useQuery({
    queryKey: "first_name",
    queryFn: () => getUsersWithPage(1).then((res) => res),
    cacheTime: 15000,
    refetchOnWindowFocus: false,
  });

  // defaault "cacheTime: 300_000" in react-query
  // in cache time you can trace from isFetching but isLoading
  // isLoading is false in 5000ms because of cached but api is generating random result so the output is changing
  // isLoading state is not returning true while in cacheTime

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  if (isFetching) return <h1>isFetching...</h1>;
  return (
    <>
      <h1>{data?.data?.data?.[0]?.first_name}</h1>
      <button onClick={() => refetch()}>refetch</button>
    </>
  );
};
