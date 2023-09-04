import React from 'react'
import { useQuery } from "react-query";
import { request } from "../../config/request";

export const useGetDetail= () => {
  return useQuery({
    queryKey: ["useGetDetail"],
    queryFn: () => request.get(`/data`).then((res) => res.data),
  });
};