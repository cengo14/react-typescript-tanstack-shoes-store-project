import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { Shoe } from "../../types";
import Loading from "../../components/loading";
import Error from "../../components/error";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";
import Foot from "./Foot";
import Images from "./Images";

const Detail = () => {
  const { id } = useParams();
  const { isLoading, error, data, refetch } = useQuery<Shoe>({
    queryKey: ["shoe"],
    queryFn: () => api.get(`/shoes/${id}`).then((res) => res.data),
  });

  if (isLoading) return <Loading />;
  if (error) return <Error error={error.message} refetch={refetch} />;
  if (!data) return;
  return (
    <section className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4">
      <div className="xl:col-span-2">
        <Images data={data} />
      </div>
      <div className="flex flex-col gap-6">
        <Head data={data} />
        <Color data={data} />
        <Size data={data} />
        <Foot data={data} />
      </div>
    </section>
  );
};

export default Detail;
