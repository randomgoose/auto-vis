import React from 'react';
import { CartesianGrid, Legend } from "recharts";

function useGeneralRules(width, height) {
  function renderCartesianGrid() {
    if (width > 160 && height > 120) {
      return <CartesianGrid strokeDasharray="3 3" />;
    } else return null;
  }
  return renderCartesianGrid();
}

export default useGeneralRules;
