// Making this a server component because it fetches data from server
import { fetchProducts, Product } from "../lib/graphql";
import ProductPage from "@/components/ProductPage";

export default async function Home() {
  const { data } = await fetchProducts();
  const products = data.products;

  return <ProductPage products={products} />;
}
