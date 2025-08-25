"use client";

import { Product } from "@/lib/graphql";

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  const { id: productId, price, name } = product;
  return (
    <div className="p-8">
      {product && (
        <>
          <h1 className="text-3xl mb-4">{name}</h1>
          <p>ID: {productId}</p>
          <p>Price: ${price}</p>
        </>
      )}
    </div>
  );
}
