import React from "react";
import { useGetDetail } from "../../service/query/useGetDetail";
import { Stack } from "@mui/material";

export const Header = () => {
  const { data } = useGetDetail();
  return (
    <Stack>
      
    </Stack>
  );
};
