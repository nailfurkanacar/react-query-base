import { useState } from "react";
import { useQuery } from "react-query";
import { getUsersWithPage } from "../services/reqres";

export const PaginationQ = () => {
  const [page, setPage] = useState(1);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["users", page],
    queryFn: () => getUsersWithPage(page).then((res) => res),
    keepPreviousData: true,
    staleTime: 10000,
  });

  //  console.log("isPreviousData", isPreviousData);

  if (isError) return <h1>Error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <>
      {data?.data?.data?.map((user, index) => (
        <h1 key={index}>{user.first_name}</h1>
      ))}

      <button
        disabled={page === 1}
        onClick={() => setPage((oldPage) => Math.max(oldPage - 1, 1))}
      >
        previos
      </button>
      <button
        disabled={page === data?.data?.total_pages}
        onClick={() => setPage(page + 1)}
      >
        next
      </button>
    </>
  );
};
