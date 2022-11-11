import { useQuery } from "react-query";
import { getAdvice } from "../services/advice";
import { getCatFact } from "../services/catfact";

export const ParallelQ = () => {
  const adviceReq = useQuery({
    queryKey: "advice",
    queryFn: () => getAdvice().then((res) => res),
  });

  const catsReq = useQuery({
    queryKey: "cats",
    queryFn: () => getCatFact().then((res) => res),
  });

  if (catsReq?.isError || adviceReq?.isError) return <h1>Error</h1>;
  if (catsReq?.isLoading || adviceReq?.isLoading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>Advice req output: {adviceReq?.data?.data?.slip?.advice}</h1>
      <h1>Cats req output: {catsReq?.data?.data?.fact}</h1>
    </>
  );
};
