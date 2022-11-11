import { useQuery } from "react-query";
import { getCatFact } from "../services/catfact";

export const BasicQ = () => {
  const catsReq = useQuery({
    queryKey: "cats",
    queryFn: () => getCatFact().then((res) => res),
  });

  if (catsReq?.isError) return <h1>Error</h1>;
  if (catsReq?.isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>{catsReq?.data?.data?.fact}</h1>
      <button onClick={() => catsReq?.refetch()}>refetch</button>
    </>
  );
};
