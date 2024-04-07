import React from "react";
import { FSelect } from "./form";
import { SORT_BY_OPTIONS } from "./ProductFilter";

function ProductSort() {
  return (
    <FSelect name="sortBy" label="Sort By" size="small" sx={{ width: 300 }}>
      {SORT_BY_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </FSelect>
  );
}

export default ProductSort;
