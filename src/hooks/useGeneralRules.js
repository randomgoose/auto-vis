import { useState } from "react";
import { CartesianGrid } from "recharts";

function useGeneralRules(width, height) {
  if (width > 160 && height > 120) {
    return <CartesianGrid strokeDasharray="3 3" />;
  } else return null;
}

export default useGeneralRules;
