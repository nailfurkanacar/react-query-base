import { useQuery } from "react-query";
import { getCatFact } from "../services/catfact";

export const DependentQ = () => {
  const {
    data: firstRequest,
    isLoading: isLoadingFirstReq,
    isError: isErrorFirstReq,
    isSuccess: isSuccessFirstReq,
    refetch: refetchFirst,
  } = useQuery({
    queryKey: "catFact-r1",
    queryFn: () => getCatFact().then((res) => res),
    refetchOnWindowFocus: false,
  });

  const dependentReq = useQuery({
    queryKey: "catFact-r2",
    queryFn: () => getCatFact().then((res) => res),
    refetchOnWindowFocus: false,
    enabled: !!isSuccessFirstReq,
  });

  if (isErrorFirstReq) return <h1>Error</h1>;
  if (isLoadingFirstReq) return <h1>Loading...</h1>;
  return (
    <>
      <h1>First Request Output: {firstRequest?.data?.fact}</h1>
      <h1>Dependent Request Output: {dependentReq?.data?.data?.fact}</h1>
      <button onClick={() => refetchFirst()}>refetch</button>
    </>
  );
};
