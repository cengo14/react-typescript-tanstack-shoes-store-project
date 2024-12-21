import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../api";
import { Shoe } from "../../types";
import Loading from "../loading";
import Error from "../error";
import Card from "./card";
import { useSearchParams } from "react-router-dom";
import formatParams from "../../utils/formatParams";

const List = () => {
  const [params, seParamss] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());
  const paramsURL = formatParams(paramsObj);
  console.log(paramsURL);

  const { isLoading, error, data, refetch } = useQuery<Shoe[]>({
    queryKey: ["shoes", paramsURL],
    queryFn: () => api.get(`/shoes${paramsURL}`).then((res) => res.data),
  });
  if (isLoading) return <Loading />;
  if (error) return <Error error={error.message} refetch={refetch} />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-8 xl:gap-y-10">
      {data?.map((shoe) => (
        <Card key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default List;
