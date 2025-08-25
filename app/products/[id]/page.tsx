import ProductDetail from "@/components/ProductDetail";
import { getProductById } from "@/lib/graphql";
import { sanitizeText } from "@/utils/text";

// Making this server component because data fetching should be done on server side to prevent SQL injection and improve performance.
// const query = `SELECT * FROM products WHERE id = '${productId}'`;
// console.log("Executing query:", query);

type Props = {
  params: { id: string };
};

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const productId = id;

  if (!productId) {
    return <div className="p-8">Product ID is missing</div>;
  }

  // Simulate fetching product data by ID
  const response = await getProductById(productId);
  const fetchedProduct = response.data.product;
  if (!fetchedProduct) {
    return <div className="p-8">Product not found</div>;
  }

  const product = {
    ...fetchedProduct,
    name: sanitizeText(fetchedProduct.name), // To prevent XSS attacks, we should sanitize the name instead of using dangerouslySetInnerHTML.
  };

  return <ProductDetail product={product} />;
}
