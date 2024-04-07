import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

function ProductList({
  products,
  loading,
}: {
  products: Record<string, any>[];
  loading?: boolean;
}) {
  return (
    <Grid container spacing={2} mt={1}>
      {products.map((product: Record<string, any>, index: number) => (
        <Grid key={product.id} item xs={6} md={4} lg={3}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
