import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className=" flex justify-center w-full">
      <CircularProgress />
    </div>
  );
};

export default Loading;
